# parse.ps1  — PowerShell-only parser for Assignment 3
# Input:  responses\*.txt  (saved via curl.exe -ILsk ...)
# Output: data\per_site.csv, data\per_cookie.csv + summary printed to console

$ErrorActionPreference = "Stop"
$respDir = "responses"
$dataDir = "data"
New-Item -ItemType Directory -Force -Path $dataDir | Out-Null

if (-not (Test-Path $respDir)) {
  Write-Error "Missing '$respDir' folder with curl outputs."
}

# Regex: start of HTTP block, Set-Cookie header (case-insensitive)
$reBlock = '^(?i)HTTP/\d(?:\.\d)?\s+(\d{3})'
$reSet   = '^(?i)Set-Cookie:\s*(.+)$'

# Containers
$perSite   = New-Object System.Collections.Generic.List[object]
$perCookie = New-Object System.Collections.Generic.List[object]
$totals    = @()
$ssCounts  = @{}
$totalHttpOnly = 0
$totalSecure   = 0
$pathSet       = 0
$pathNonRoot   = 0

function Normalize-SameSite([string]$v) {
  if ([string]::IsNullOrWhiteSpace($v)) { return "Unset" }
  switch -Regex ($v.ToLower()) {
    'strict' { 'Strict'; break }
    'lax'    { 'Lax'; break }
    'none'   { 'None'; break }
    default  { 'Unset' }
  }
}

function Get-Median($nums) {
  if (-not $nums -or $nums.Count -eq 0) { return 0 }
  $sorted = $nums | Sort-Object
  $n = $sorted.Count
  if ($n % 2 -eq 1) { return $sorted[ [int]([math]::Floor($n/2)) ] }
  else { return ([double]($sorted[$n/2-1] + $sorted[$n/2]) / 2) }
}

# Parse each response file
Get-ChildItem -Path $respDir -Filter *.txt | Sort-Object Name | ForEach-Object {
  $file = $_.FullName
  $site = [System.IO.Path]::GetFileNameWithoutExtension($_.Name)

  $lines = Get-Content -Path $file -Encoding UTF8 -ErrorAction SilentlyContinue

  $blocks = @()
  $currStatus = $null
  $currHeaders = @()

  foreach ($line in $lines) {
    $m = [regex]::Match($line, $reBlock)
    if ($m.Success) {
      if ($null -ne $currStatus) {
        $blocks += [pscustomobject]@{ Status = [int]$currStatus; Headers = $currHeaders }
      }
      $currStatus = $m.Groups[1].Value
      $currHeaders = @()
    } elseif ($null -ne $currStatus) {
      $currHeaders += $line
    }
  }
  if ($null -ne $currStatus) {
    $blocks += [pscustomobject]@{ Status = [int]$currStatus; Headers = $currHeaders }
  }

  if ($blocks.Count -eq 0) {
    # No parsable HTTP block
    $perSite.Add([pscustomobject]@{
      site = $site; final_status = "N/A"; cookies_total = 0
      cookies_httponly = 0; cookies_secure = 0
      samesite_strict = 0; samesite_lax = 0; samesite_none = 0; samesite_unset = 0
      path_set = 0; path_non_root = 0
    })
    $totals += 0
    return
  }

  $finalStatus = $blocks[-1].Status
  $cookies = @()

  foreach ($blk in $blocks) {
    foreach ($h in $blk.Headers) {
      $m = [regex]::Match($h, $reSet)
      if ($m.Success) {
        $cookieLine = $m.Groups[1].Value.Trim()

        # Split attributes
        $parts = $cookieLine -split ';'
        $nameValue = $parts[0].Trim()
        $cookieName = ($nameValue -split '=',2)[0].Trim()

        $attrs = @{}
        $flags = New-Object System.Collections.Generic.HashSet[string]

        foreach ($raw in $parts[1..($parts.Count-1)] 2>$null) {
          $p = $raw.Trim()
          if ($p -match '=') {
            $kv = $p -split '=',2
            $k = $kv[0].Trim().ToLower()
            $v = $kv[1].Trim()
            $attrs[$k] = $v
          } elseif ($p) {
            $null = $flags.Add($p.ToLower())
          }
        }

        $httpOnly = $flags.Contains('httponly') -or $attrs.ContainsKey('httponly')
        $secure   = $flags.Contains('secure')   -or $attrs.ContainsKey('secure')
        $sameSite = Normalize-SameSite( $(if ($attrs.ContainsKey('samesite')) { $attrs['samesite'] } else { "" }) )
        $path     = $(if ($attrs.ContainsKey('path')) { $attrs['path'] } else { "Unset" })

        $cookies += [pscustomobject]@{
          name = $cookieName
          HttpOnly = [bool]$httpOnly
          Secure   = [bool]$secure
          SameSite = $sameSite
          Path     = $path
        }
      }
    }
  }

  # Per-site tallies
  $count = $cookies.Count
  $totals += $count

  $hCount = ($cookies | Where-Object { $_.HttpOnly }).Count
  $sCount = ($cookies | Where-Object { $_.Secure }).Count

  $ssStrict = ($cookies | Where-Object { $_.SameSite -eq 'Strict' }).Count
  $ssLax    = ($cookies | Where-Object { $_.SameSite -eq 'Lax' }).Count
  $ssNone   = ($cookies | Where-Object { $_.SameSite -eq 'None' }).Count
  $ssUnset  = ($cookies | Where-Object { $_.SameSite -eq 'Unset' }).Count

  $pSet = ($cookies | Where-Object { $_.Path -ne 'Unset' }).Count
  $pNon = ($cookies | Where-Object { $_.Path -ne 'Unset' -and $_.Path -ne '/' }).Count

  $totalHttpOnly += $hCount
  $totalSecure   += $sCount
  $pathSet       += $pSet
  $pathNonRoot   += $pNon

  foreach ($k in @('Strict','Lax','None','Unset')) {
    if (-not $ssCounts.ContainsKey($k)) { $ssCounts[$k] = 0 }
  }
  $ssCounts['Strict'] += $ssStrict
  $ssCounts['Lax']    += $ssLax
  $ssCounts['None']   += $ssNone
  $ssCounts['Unset']  += $ssUnset

  # Add per-cookie rows
  $idx = 0
  foreach ($c in $cookies) {
    $idx++
    $perCookie.Add([pscustomobject]@{
      site = $site
      cookie_index = $idx
      name = $c.name
      HttpOnly = $c.HttpOnly
      Secure   = $c.Secure
      SameSite = $c.SameSite
      Path     = $(if ($c.Path) { $c.Path } else { 'Unset' })
    })
  }

  # Add per-site row
  $perSite.Add([pscustomobject]@{
    site = $site
    final_status = $finalStatus
    cookies_total = $count
    cookies_httponly = $hCount
    cookies_secure = $sCount
    samesite_strict = $ssStrict
    samesite_lax = $ssLax
    samesite_none = $ssNone
    samesite_unset = $ssUnset
    path_set = $pSet
    path_non_root = $pNon
  })
}

# Write CSVs
$perSite    | Export-Csv -Path (Join-Path $dataDir "per_site.csv")    -NoTypeInformation -Encoding UTF8
$perCookie  | Export-Csv -Path (Join-Path $dataDir "per_cookie.csv")  -NoTypeInformation -Encoding UTF8

# Summary stats
$min = ($totals | Measure-Object -Minimum).Minimum
$max = ($totals | Measure-Object -Maximum).Maximum
$avg = [math]::Round( ($totals | Measure-Object -Average).Average, 2 )
$med = Get-Median $totals

Write-Host ""
Write-Host "==== SUMMARY ===="
Write-Host ("Sites parsed: {0}" -f $perSite.Count)
Write-Host ("Min/Max/Mean/Median cookies per site: {0} / {1} / {2} / {3}" -f $min,$max,$avg,$med)
Write-Host ("HttpOnly (cookie count): {0}" -f $totalHttpOnly)
Write-Host ("Secure   (cookie count): {0}" -f $totalSecure)
Write-Host ("SameSite counts: Strict={0}, Lax={1}, None={2}, Unset={3}" -f $ssCounts['Strict'],$ssCounts['Lax'],$ssCounts['None'],$ssCounts['Unset'])
Write-Host ("Path set (cookie count): {0}" -f $pathSet)
Write-Host ("Path != '/' (cookie count): {0}" -f $pathNonRoot)
Write-Host ("CSV written to: data\per_site.csv, data\per_cookie.csv")
