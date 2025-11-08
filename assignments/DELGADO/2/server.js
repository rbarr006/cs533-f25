const express = require('express');
const cookieParser = require('cookie-parser');
const server = express();

server.use(cookieParser());

server.listen(port=4000, () => {
    console.log(`Server listening on port ${port}`);
});

server.get('/', (req, res) => {
    res.send('Jose Delgado - CS 533 Fall 2025');
});

server.get('/the_residence', (req, res) => {
    res.cookie('fave_show', 'The_Residence_on_Netflix');
    res.send('The Residence is very much like "Knives Out" except much more engaging.');
});

server.get('/lasagna', (req, res) => {
    res.cookie('fave_food', 'lasagna_is_sooooo_good');
    res.send('Lasagna is always a special meal that I cannot remember NOT enjoying.');
});

server.get('/osrs', (req, res) => {
    res.cookie('fave_game', 'Old-School_RuneScape');
    res.send('Old School RuneScape is a passion and currently my favorite video game of all time');
});

server.get('/creed', (req, res) => {
    res.cookie('fave_animal', 'my_old_boy_Creed');
    res.send('Creed has been my dog for almost 10 years now and I love him so much!!');
});