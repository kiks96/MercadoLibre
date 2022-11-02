const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000

app.listen(port, () => {console.log("server running ok in port " + port)});

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
