const express = require('express');
const app = express();
const path = require('path');
let PORT = 3000;

app.listen(PORT, console.log("listen port " + PORT));

//obtener los recuersos estaticos
app.use(express.static('public'));

//dos parametros: endpoint, callback
app.get("/", (req,res)=>{
    res.sendFile(path.resolve('./views/home.html'))
})

app.get("/login", (req,res)=>{
    res.sendFile(path.resolve('./views/login.html'))
})

app.get("/register", (req,res)=>{
    res.sendFile(path.resolve('./views/register.html'))
})
