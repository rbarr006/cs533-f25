const fs = require('fs');

// Read list of websites
const websiteList = fs.readFileSync("Websites.txt").toString().split("\r\n");


// Generates a main page with links to all of the websites (top section)
let mainHTML = '<!DOCTYPE html>\n';
mainHTML    += '<html lang="en">\n';
mainHTML    += '<head>\n';
mainHTML    += '<meta charset="UTF-8">\n';
mainHTML    += '    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n';
mainHTML    += '    <title>iFrame Attack</title>\n';
mainHTML    += '</head>\n';
mainHTML    += '<body>\n';
mainHTML    += '<h1>Website iFrame Attack</h1>\n';


// Generate an HTML file for each website in the array
for(let line = 0; line < websiteList.length; line++){

    // Creates an HTML file using the following template
    let htmlTemplate = '<!DOCTYPE html>\n'
    htmlTemplate    += '<html lang="en">\n'
    htmlTemplate    += '<head>\n';
    htmlTemplate    += '<meta charset="UTF-8">\n'
    htmlTemplate    += '    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n'
    htmlTemplate    += '    <title>' + websiteList[line] +'</title>\n'
    htmlTemplate    += '</head>\n'
    htmlTemplate    += '<body>\n'
    htmlTemplate    += '<h1>iFrame for https://' + websiteList[line] + '</h1>'
    htmlTemplate    += '    <iframe src="http://' + websiteList[line] + '" width="1024" height="1024"></iframe>\n'
    htmlTemplate    += '<script>\n'
    htmlTemplate    += '    alert(document.cookie)\n'
    htmlTemplate    += '</script>\n'
    htmlTemplate    += '</body>\n'
    htmlTemplate    += '</html>\n'

    // Outputs the htmlTemplate string as an HTML files
    fs.writeFile(("../framable/" + websiteList[line] + ".html"), htmlTemplate, err =>{
        if(err){
            console.error(err);
            return;
        }
    });

    // Adds a link for each website in the main HTML file
    mainHTML+= '    <a href="./framable/' + websiteList[line] + '.html">' + websiteList[line] + '</a>\n';
    mainHTML+= '    <br>\n';
}


// Lower part of the main page HTML
mainHTML    += '\n';
mainHTML    += '</body>\n';
mainHTML    += '</html>\n';

// Outputs the main page an an HTML file
fs.writeFile("./iFrameMainPage.html", mainHTML, err =>{
    if(err){
        console.error(err);
        return;
    }
});

// Reports on how many files were created
console.log("Generated HTML files for " + websiteList.length.toString() + " websites.");