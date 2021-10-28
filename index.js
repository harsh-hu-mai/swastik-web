const express = require('express')
require("./db/conn")

const path = require('path')
const app = express()
const PORT = process.env.PORT ||5000;
const bodyparser = require("body-parser")
const User = require('./db/conn')
const staticpath = path.join(__dirname, "public");
// app.use(express.static(staticpath))
app.use('/css', express.static(path.join(__dirname, "../css/style.css")));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/css/img'));
app.use(express.static(__dirname + '/public/css'));
app.set("view engine", "hbs");
app.use(express.urlencoded({extended:false}))
//routing
app.get('/', (req, res) => {
    res.render("index");
})
app.get('/contacts', (req, res) => {
    res.render("cotacts");
})
app.get('/gallery', (req, res) => {
    res.render("gallery");
})
app.post('/contacts', async(req, res) => {
   try {
    //    res.send(req.body);
    const userData = new User(req.body);
    await userData.save();
    res.status(201).render("index");

   } catch(error){
       res.status(500).send(error);
   }
    
})
//   routing
//  res.sendFile(path.join(__dirname, '../final.html'))
// res.sendFile(path.join(__dirname, '../style.css'))

// server
app.listen(PORT, console.log(
    `Server started on port ${PORT}`));