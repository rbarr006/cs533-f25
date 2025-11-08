const axios = require('axios');
const fs = require('fs').promises;

// Needed for looping through with a Python Script
let url = process.argv[2];

// Executes Iframe and captures response
sendIframeRequest(url);

/* Axios is an HTTP client that I'm familiar with on previous projects
* I use axios to send a GET request and process the response, with
* a catch being used to ensure SOME output is captured on errors
*/

function sendIframeRequest(url) {

    axios({
        method: 'get',
        url: url,
        responseType: 'arraybuffer',
        headers: {
            'Accept-Encoding': 'gzip, deflate, br' // Used to mitigate gzip encoding errors
        }
    }).then(res => {
        console.log('axios')
        analyzeIframe(res)
    }).catch(error => {
        result = {
            url: url,
            status: statusCodeResolver(error),
            defeatMechanism: 'N/A due to Network Error'
        }
        writeToFile(result);
    });
}

/* analyzeIframe parses the response and goes through the various headers to verify whether or not a 
   given URL can be opened with an iFrame. Data is parsed into a dictionary result to allow cleaner
   response management. Essentially, if x-frame-options, content-security-policy, or frame-ancestors
   exist then there are security measures that prevent iframes being set up from localhost.

   xfo: Cross Frame Options headers
   csp: Content Security Policy headers
   defeatMechanism: A verbose description of the iframe mechanism of defeat
*/
function analyzeIframe(res) {
    let result = {
        url: url,
        status: 'Unknown',
        headers: {
            xfo: 'Not Found',
            csp: 'Not Found'
        },
        defeatMechanism: 'None'
    }
    result.status = res.status;
    const crossFrameOptions = res.headers.get('x-frame-options');
    
    if(crossFrameOptions) {
        console.log(`crossFrameOptions: ${crossFrameOptions}`);
        result.headers.xfo = crossFrameOptions.trim();
        result.defeatMechanism = `X-Frame-Options: ${crossFrameOptions.trim()}`;
    }

    const contentSecurity = res.headers.get('content-security-policy');
    if(contentSecurity && contentSecurity.includes('frame-ancestors')) {
        console.log(`contentSecurity: ${contentSecurity}`)
        res.headers.csp = contentSecurity.trim();
        const match = contentSecurity.match(/frame-ancestors\s+(^;]+)/i);
        const frameAncestorsValue = match ? match[1].trim() : 'Unknown';

        result.defeatMechanism = `Content-Security-Policy: frame-ancestors ${frameAncestorsValue}`;
    }

    if(result.defeatMechanism === 'None') {
        result.defeatMechanism = 'Framable';
    }

    writeToFile(result);
}

// Helper function for writing data to the README

async function writeToFile(result) {
    const data = dataFormatter(result);

    try {   //First try/catch is for seeing if README already exists
        if(await fs.readFile('./README.md')) {
            await fs.appendFile('./README.md', data, 'utf8');
            console.log('README.md appended data successfully');
        } 
    } catch (err) { //This try/catch is for creating the README if it does not exist
        try {
            await fs.writeFile('./README.md', data, 'utf8');
            console.log('README.md written successfully');
        } catch (err) {
            await fs.writeFile('./README.md', data, 'utf8');
            console.error('Error writing file.');
        }
    }
}

// Outputs data formatted for the README
function dataFormatter(result) {
    const url = result.url;
    const status = result.status;
    const framable = result.defeatMechanism;

    return `| ${url} | ${status} | ${framable} |\n`
}

/* Catches malformed error responses - typically axios responses
   will have a res.statusCode but if it can't bring one and there is no
   catch to determine if error.request.res is undefined, the data will
   not write at all
*/
function statusCodeResolver(error) {
    if(error.request == undefined) {
        return '0 - No response from site'
    }

    if(error.request.res == undefined) {
        return '0 - No response from site'
    }

    if(error.request.res.statusCode == undefined) {
        return '0 - No response from site'
    }
    
    return error.request.res.statusCode // Generic error catch text
}