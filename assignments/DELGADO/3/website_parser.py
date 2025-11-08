import subprocess
import sys

outputFileName = "./README.md"
inputFilePath = "./JDELG007@ODU.EDU"
totalCookies = 0
totalSecure = 0
totalSameSite = 0
totalStrict = 0
totalLax = 0
totalNone = 0
totalPath = 0
totalValidSites = 0
cookieArray = []

median = 0
min = 1000
max = 0

# Constructor for the initial markdown header for README.md
def createFile():
    tableHeader = '| Website  | HttpOnly | Secure | SameSite | Strict | Lax | None | Path |'
    formatting = '| :------- | :------- | :----- | :------- | :----- | :-- | :--- | :--- |'
    with open(outputFileName, "w") as f:
        f.write(tableHeader + '\n')
        f.write(formatting + '\n')

# Constructor for each row of cookie data
def createRow(website, httpOnly, secure, samesite, strict, lax, none, path):
    with open(outputFileName, "a") as f:
        f.write(f"| {website} | {httpOnly} | {secure} | {samesite} | {strict} | {lax} | {none} | {path} |\n")

# Constructor for final tally of cookie data
def createFinalRow(totalCookies, totalSecure, totalSameSite, totalStrict, totalLax, totalNone, totalPath):
    with open(outputFileName, "a") as f:
        f.write(f"| Totals | Cookies: {totalCookies} | Secure: {totalSecure} | SameSite: {totalSameSite} " +
                f"| Strict: {totalStrict} | Lax: {totalLax} | None: {totalNone} | Paths: {totalPath}\n")

# Operator for getting the median using all valid sites
def getMedian(cookieList):
    cookieList = sorted(cookieList)
    middle = len(cookieList)
    if middle % 2 == 1:
        return cookieList[middle // 2]
    else:
        mid1 = cookieList[middle // 2 - 1]
        mid2 = cookieList[middle // 2]
        return (mid1 + mid2 / 2.0)

# Constructor for summary of cookies across all valid sites
def createSummarization(totalCookies):
    with open(outputFileName, "a") as f:
        f.write(f"|Total Valid Sites: {totalValidSites} | Mean: {round(totalCookies/totalValidSites, 1)} | Median: {getMedian(cookieArray)} | Min: {min} | Max: {max}")

# Gets the path value from a cookie
def processPath(pathText):
    pairs = pathText.split(';')
    print(pairs)
    for item in pairs:
        if 'path' in item:
            item = item.split('=')
            return item[1]

# Gets all the SameSite data from a cookie
def getSameSite(cookieData):
    sameSiteInfo = {
        "strict": False,
        "lax" : False,
        "none" : False
    }

    match cookieData:
        case _ if "strict" in cookieData:
            sameSiteInfo["strict"] = True
        case _ if "lax" in cookieData:
            sameSiteInfo["lax"] = True
        case _ if "none" in cookieData:
            sameSiteInfo["none"] = True
    
    return sameSiteInfo

# Main curl subprocess
def getCurlInformation(url):
    try:
        command = ['curl', '-ILsk', url]
        log = subprocess.run(command, check=True, capture_output=True, text=True)
        output = log.stdout
        return output
    except subprocess.CalledProcessError as e:
        print(f"Error executing curl: {e}")
        return "Skip"
    except FileNotFoundError:
        print("Error: The 'curl' command was not found. Make sure it is installed and in your PATH.")

# Functionality starts here
createFile()
with open(inputFilePath, 'r') as file:
    for url in file:

        #Initialize Defaults for each URL
        url = url.strip()           # removes whitespace/linebreaks
        statusCode = 404            # standardized status code
        path = 'None'               # standardized path, if none
        httpOnly = 0
        sameSite = 0
        secure = 0
        numStrict = 0
        numLax = 0
        numNone = 0
        numCookies = 0

        target = url.split()[0]
        print(f"target: {target}")
        output = getCurlInformation(target)
        if output != 'Skip':        # if curl fails on the site, skip all attempts for operations
            totalValidSites += 1    # curl succeeds so site will be used for mean and median calculations

            # Take the curl output, go line by line and pull out cookie and session information
            # Most of this is parsing the data contained within Set-Cookie:
            
            for line in output.splitlines():
                line = line.lower()         # standardizes spelling in-case of user input (i.e. set-Cookie vs Set-Cookie)

                # Ensures final status code is used
                if 'http/1' in line or 'http/2' in line:
                    statusCode = line.split()[1]
                    statusUrl = f"{url} ({statusCode})"

                # Accumulates totals and data for processing 
                if 'set-cookie' in line:
                    totalCookies += 1
                    numCookies += 1
                    if 'samesite' in line:
                        totalSameSite += 1
                        sameSite += 1
                        cookieData = getSameSite(line)
                        print(cookieData)
                        if cookieData["strict"] == True:
                            totalStrict += 1
                            numStrict += 1
                        if cookieData["lax"] == True:
                            totalLax += 1
                            numLax += 1
                        if cookieData["none"] == True:
                            totalNone += 1
                            numNone += 1
                    if 'path=' in line:
                        path = processPath(line)
                        totalPath += 1
                    if 'httponly' in line:
                        httpOnly += 1
                    if 'secure' in line:
                        secure += 1
                        totalSecure += 1
                    # Formats the gathered data into markdown

        # Before going to the next URL, check for new max, mins, and append this site's cookie total to the overal array
        if numCookies > max:
            max = numCookies
        if numCookies < min:
            min = numCookies
        cookieArray.append(numCookies)
        createRow(statusUrl, httpOnly, secure, sameSite, numStrict, numLax, numNone, path)
    # Create a final row that gives the requested totals
    createFinalRow(totalCookies, totalSecure, totalSameSite, totalStrict, totalLax, totalNone, totalPath)

    # Create a summarization that shows the Max, Min, Median, and Mean of cookies across all sites
    createSummarization(totalCookies)