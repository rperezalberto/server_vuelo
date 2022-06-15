const express = require("express");
const bodyParser = require('body-parser');
const routes = require("./routes/index");

const app = express();

app.get("/", routes());
app.get("/login", routes());


app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));



app.listen(3001, () => {
    console.log("Corriendo por el puerto:", 3001);
});

