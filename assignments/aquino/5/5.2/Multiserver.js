const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const port1 = 4000;
const port2 = 5000;
const port3 = 5001;


// First server
const app1 = express();

app1.use((request, response, next) => {
        response.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
        response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        response.setHeader('Access-Control-Allow-Credentials', true);
        next();

        /*
        response.setHeader('X-CS533f25-game', `Darkest-Dungeon`);
        response.setHeader('X-CS533f25-song', `Marriage-D'Amour`);
        response.setHeader('X-CS533f25-food', `Chicken-Parmesan`);
        response.setHeader('X-CS533f25-joke', `The-Game`);
        */
});

/*
app1.use(cors({

    origin: 'https://localhost:5000',
    allowedHeaders: ['X-CS533f25-game', 'X-CS533f25-song', 'X-CS533f25-food', 'X-CS533f25-joke']

}));
*/





// Get for the server original location
app1.get("/", async(request, response) =>{
    // Reads the RequestPage.html file which is the page format for the root location
    fs.readFile('RequestPage.html', function(error, data){
        if(error){
            response.writeHead(404);
            response.write('RequestPage.html cannot be found');
        }
        else{
            response.write(data);
        }
        response.end();
    });
});

// Listens for server
app1.listen(port1, function(err){
    if(err){
        console.log('Error', err);
    }
    else{
        console.log('Request server is listening on localhost:' + port1);
    }
})

/*
async function fetchFromServer(){

    try{
        const response = await fetch("https://localhost:5000");
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.error(error);
    }


    // Fetches
    fetch("https://localhost:5000")
        .then(response => response.json())
        .then(data =>{
            console.log(data.favorites);
        });
}
*/



// Second server
const app2 = express();

/*
app2.use((request, response, next) => {
        response.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000');
        response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        response.setHeader('Access-Control-Allow-Credentials', true);

        response.setHeader('X-CS533f25-game', `Darkest-Dungeon`);
        response.setHeader('X-CS533f25-song', `Marriage-D'Amour`);
        response.setHeader('X-CS533f25-food', `Chicken-Parmesan`);
        response.setHeader('X-CS533f25-joke', `The-Game`);

        next();

});
*/

/*
app2.use(cors({
    origin: 'https://localhost:4000',
    allowedHeaders: ['X-CS533f25-game', 'Darkest-Dungeon'], 
    //['X-CS533f25-song', "Marriage-D'Amour"], ['X-CS533f25-food', 'Chicken-Parmesan'], ['X-CS533f25-joke', 'The-Game']
}));
*/

// Get for the server original location
app2.get("/", async(request, response) =>{
    // Reads the Response.json file which is the page format for the root location
    fs.readFile('./Response.json', function(error, data){
        if(error){
            response.writeHead(404);
            response.write('Response.json cannot be found');
        }
        else{
            //response.json(data);
            const message = `{"message":"This is a response message",  "favorites": [{"game":"Darkest Dungeon"}, {"song":"Marriage D'Amour"}, {"food":"Chicken Parmesan"}, {"joke":"The Game"}]}`
            response.json(message);
        }
    });

    /*
    const message = '{' +  '\n'
    '   "message": "This is a response message",' +  '\n'
    '   "favorites": [' +  '\n'
    '    {"game":"Darkest Dungeon"},' + '\n'
    `    {"song":"Marriage D'Amour"},` +  '\n'
    '    {"food":"Chicken Parmesan"},' + '\n'
    '    {"joke":"The Game"}' + '\n'
    '   ]' + '\n'
    '}'
    */
});

// Listens for server
app2.listen(port2, function(err){
    if(err){
        console.log('Error', err);
    }
    else{
        console.log('Response server is listening on localhost:' + port2);
    }
})






// Second server
const app3 = express();

app3.use((request, response, next) => {
        response.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000');
        response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        response.setHeader('Access-Control-Allow-Credentials', true);

        response.setHeader('X-CS533f25-game', `Darkest-Dungeon`);
        response.setHeader('X-CS533f25-song', `Marriage-D'Amour`);
        response.setHeader('X-CS533f25-food', `Chicken-Parmesan`);
        response.setHeader('X-CS533f25-joke', `The-Game`);

        next();

});

/*
app2.use(cors({
    origin: 'https://localhost:4000',
    allowedHeaders: ['X-CS533f25-game', 'Darkest-Dungeon'], 
    //['X-CS533f25-song', "Marriage-D'Amour"], ['X-CS533f25-food', 'Chicken-Parmesan'], ['X-CS533f25-joke', 'The-Game']
}));
*/

// Get for the server original location
app3.get("/", async(request, response) =>{
    // Reads the Response.json file which is the page format for the root location
    fs.readFile('./Response.json', function(error, data){
        if(error){
            response.writeHead(404);
            response.write('Response.json cannot be found');
        }
        else{
            //response.json(data);
            const message = `{"message":"This is a response message",  "favorites": [{"game":"Darkest Dungeon"}, {"song":"Marriage D'Amour"}, {"food":"Chicken Parmesan"}, {"joke":"The Game"}]}`
            response.json(message);
        }
    });

    /*
    const message = '{' +  '\n'
    '   "message": "This is a response message",' +  '\n'
    '   "favorites": [' +  '\n'
    '    {"game":"Darkest Dungeon"},' + '\n'
    `    {"song":"Marriage D'Amour"},` +  '\n'
    '    {"food":"Chicken Parmesan"},' + '\n'
    '    {"joke":"The Game"}' + '\n'
    '   ]' + '\n'
    '}'
    */
});

// Listens for server
app3.listen(port3, function(err){
    if(err){
        console.log('Error', err);
    }
    else{
        console.log('Response server is listening on localhost:' + port3);
    }
})