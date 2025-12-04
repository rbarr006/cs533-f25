// Read from text file into array
const fs = require('fs');


// Reads data into websites array
const rawData = fs.readFileSync("Website Data.txt").toString().split("\r\n");
let websites = [];
for(let line = 0; line < rawData.length; line += 12){

    // Adds a website object, with all of the necessary data read from the file, to 
    // the list of websites
    websites.push({
        address: rawData[line],
        responseCode: rawData[line+1],
        totalCookies: rawData[line+2],
        httpOnly: rawData[line+3],
        secure: rawData[line+4],
        sameSite: rawData[line+5],
        ssSTrict: rawData[line+6],
        ssLax: rawData[line+7],
        ssNone: rawData[line+8],
        pathTotal: rawData[line+9],
        pathNoSlash: rawData[line+10]
    });
}



// Initializing variables used to hold total data for analysis
let totalCookieNum = 0; let totalHttpOnlyCookies = 0; let totalSecureCookies = 0; let totalSameSiteCookies = 0; let totalSSStrictCookies = 0;
let totalSSLaxCookies = 0; let totalSSNoneCookies = 0; let totalPathCookies = 0; let totalPathNoSlashCookies = 0;

// Initializing min, max
let minCookies = 0; let maxCookies = 0; 
// Initializing median and an array for sorting purposes
let medianCookies = 0; let listOfNumCookies = [];

// Tally data from all of the websites and log min and max cookies
for(let currentWebsite = 0; currentWebsite < websites.length; currentWebsite += 1){
    totalCookieNum += Number(websites[currentWebsite].totalCookies);
    totalHttpOnlyCookies += Number(websites[currentWebsite].httpOnly);
    totalSecureCookies += Number(websites[currentWebsite].secure);
    totalSameSiteCookies += Number(websites[currentWebsite].sameSite);
    totalSSStrictCookies += Number(websites[currentWebsite].ssSTrict);
    totalSSLaxCookies += Number(websites[currentWebsite].ssLax);
    totalSSNoneCookies += Number(websites[currentWebsite].ssNone);
    totalPathCookies += Number(websites[currentWebsite].pathTotal);
    totalPathNoSlashCookies += Number(websites[currentWebsite].pathNoSlash);

    // Sets cookies to the new minimum if it is found
    if(minCookies > websites[currentWebsite].totalCookies){
        minCookies = Number(websites[currentWebsite].totalCookies);
    }
    // Sets cookies to the new maximum if it is found
    if(maxCookies < websites[currentWebsite].totalCookies){
        maxCookies = Number(websites[currentWebsite].totalCookies);
    }

    // Adds the number of cookies in the currently viewed website to the list so it can be sorted later
    listOfNumCookies.push(Number(websites[currentWebsite].totalCookies));
}
let averageCookies = totalCookieNum/websites.length;


// Insertion sorts the list of total number of cookies
for(let i = 1; i < listOfNumCookies.length; i++){
    let toBeSorted = listOfNumCookies[i];

    let j = i - 1;
    while(j >=0 && listOfNumCookies[j] > toBeSorted){
        listOfNumCookies[j + 1] = listOfNumCookies[j];
        j--;
    }
    listOfNumCookies[j + 1] = toBeSorted;
}

// Median for even, find the average of the two middle values of the list
if(listOfNumCookies%2 == 0){
    medianCookies = (listOfNumCookies[listOfNumCookies.length/2] + listOfNumCookies[(listOfNumCookies.length/2) + 1])/2;
}
// Median for odd numbers, find the halfway point and round up
else{
    medianCookies = listOfNumCookies[Math.ceil(listOfNumCookies.length/2)]
}



// Creates the table in markdown format, represented as a string
let formattedTable = "|            Website            | Status Code | Cookies | HttOnly | Secure | SameSite | Strict | Lax | None | Path | Path (Excluding '/') |\n";
formattedTable +=    "| :---------------------------- | :---------: | :-----: | :-----: | :----: | :------: | :----: | :---: | :---: | :----: | :----: |\n";
// Loop through and add each website to the formatted table
for(let index = 0; index < websites.length; index++){
    formattedTable += "| " + websites[index].address + " | " + websites[index].responseCode + " | " + websites[index].totalCookies + " | " + websites[index].httpOnly + " | " + websites[index].secure + " | " + websites[index].sameSite + " | " + websites[index].ssSTrict + " | " + websites[index].ssLax + " | " + websites[index].ssNone + " | " + websites[index].pathTotal + " | " + websites[index].pathNoSlash + " |\n";
}
// Final summary added to formatted table
formattedTable += "| Total Websites: " + websites.length + " | N/A | Total Cookies: " + totalCookieNum + " | HttpOnly Cookies: " + totalHttpOnlyCookies + " | Secure Cookies: " + totalSecureCookies + " | SameSite Cookies: " + totalSameSiteCookies + " | Strict Cookies: " + totalSSStrictCookies + " | Lax Cookies: " + totalSSLaxCookies + " | None Cookies: " + totalSSNoneCookies + " | Path Cookies: " + totalPathCookies + " | Path (excluding '/') Cookies: " + totalPathNoSlashCookies + " |\n";
formattedTable += "| Cookie Stats | Min Cookies: " + minCookies + " | Max Cookies: " + maxCookies + " | Mean Cookies: " + averageCookies.toFixed(3) + " | Median Cookies: " + medianCookies + " |\n";








// Outputs the formatted table as a text file
fs.writeFile('Table.txt', formattedTable, err =>{
    if(err){
        console.error(err);
        return;
    }
});