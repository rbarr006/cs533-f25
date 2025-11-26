# fetch.ps1 — HEAD requests, follow redirects, ignore TLS errors, save full chains
$sitesFile   = "sites.txt"
$responses   = "responses"
New-Item -ItemType Directory -Force -Path $responses | Out-Null
if (-not (Test-Path $sitesFile)) { Write-Error "Missing sites.txt"; exit 1 }

$ua = "curl/8.x (+course-assignment; HEAD-only)"
$opts = @("-I","-L","-s","-k","--max-redirs","50","--connect-timeout","10","-A",$ua,"-H","Accept: */*")

$sites = Get-Content $sitesFile | Where-Object { $_.Trim().Length -gt 0 }
$i=0
foreach ($site in $sites) {
  $i++
  $name = $site.Trim()
  $file = Join-Path $responses ($name.Replace("https://","").Replace("http://","").Replace("/","_") + ".txt")
  Write-Host "[$i/$($sites.Count)] $name"

  # 1) schemeless
  try { & curl.exe @opts $name 2>$null | Out-File -Encoding utf8 $file } catch {}

  if (-not (Test-Path $file) -or (Get-Item $file).Length -eq 0) {
    # 2) https
    try { & curl.exe @opts ("https://" + $name) 2>$null | Out-File -Encoding utf8 $file } catch {}
  }
  if ((-not (Test-Path $file)) -or (Get-Item $file).Length -eq 0) {
    # 3) http
    try { & curl.exe @opts ("http://" + $name) 2>$null | Out-File -Encoding utf8 $file } catch {}
  }
}
Write-Host "Done → responses/*.txt"