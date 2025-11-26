/**/

const http = require('http')
const url = process.argv.slice(2)
let resultQueue = []
let counter = 0

for(let i=0;i<url.length;i++){
    http.get(url[i], function(response){
        let result = ""
        response.setEncoding("utf8")
        response.on("data", function(chunk){
            result += chunk
        })
        response.on("end", function(){
            resultQueue[i] = result
            counter ++
            if(counter == url.length){
                resultQueue.forEach(function(item){
                    console.log(item)
                })
            }
        })
    })
}