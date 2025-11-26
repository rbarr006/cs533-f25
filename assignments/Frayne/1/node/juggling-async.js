const http = require('http');

const urls = process.argv.slice(2, 5);
const results = [];
let completed = 0;

function fetchData(index) {
  http.get(urls[index], (response) => {
    let data = '';

    response.setEncoding('utf8');
    response.on('data', chunk => data += chunk);
    response.on('end', () => {
      results[index] = data;
      completed++;

     
      if (completed === urls.length) {
        results.forEach(result => console.log(result));
      }
    });
  }).on('error', (err) => {
    console.error(`Error fetching URL ${urls[index]}:`, err.message);
  });
}

for (let i = 0; i < urls.length; i++) {
  fetchData(i);
}