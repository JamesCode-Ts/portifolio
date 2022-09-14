

const express = require("express");
const app = express();


const port = process.env.PORT || 3000;


app.get("/", function (req, res) {
res.send(index.html);

});


app.listen(port, function () {
    var porta = process.env.PORT || 3000;
    app.listen(port);

});
