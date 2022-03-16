const express = require ("express");
const path = require ("path");
const app = express();
const PORT =process.env.PORT || 5000;

app.use(express.static(path.join(__dirname,"../","public")));

app.get("/", (req,res) => res.sendFile (path.join(__dirname,"views", "Home.html")));

app.listen(PORT, () => console.log("Estoy funcionando"));


app.get('/Login', (req,res)=>{
    res.sendFile(path.join(__dirname, '/views/Login.html'));
});

app.get('/Register', (req,res)=>{
    res.sendFile(path.join(__dirname, '/views/Register.html'));
});