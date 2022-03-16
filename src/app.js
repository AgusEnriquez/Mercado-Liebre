const express = require ("express");
const path = require ("path");
const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname,"../","public")));

app.get("/", (req,res) => res.sendFile (path.join(__dirname,"views", "home.html")));

app.listen(port, () => console.log("Estoy funcionando"));


app.get('/Login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/Register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});