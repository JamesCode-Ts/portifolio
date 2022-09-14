

const express = require("express");
const app = express();
const path = require('path')


const port = process.env.PORT || 3000;


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'))});

    app.get('/bio.html', function(req, res) {
        res.sendFile(path.join(__dirname + '/bio.html'))});


app.listen(port, function () {
    console.info("Aplicação rodando em http://localhost:3000")

});
