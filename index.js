

const express = require("express");
const app = express();


const port = process.env.PORT || 3000;


app.get('/', function(req, res) {
    res.sendFile( path.resolve('index.html') );
});


app.listen(port, function () {
    console.info("Aplicação rodando em http://localhost:3000")

});
