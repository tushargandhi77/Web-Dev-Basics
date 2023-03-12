const express = require("express");
const path = require("path");
const app = express();
const port = 80;

app.use('/static',express.static('static'))

app.set('view engine','pug')

// set view directory

app.set('views',path.join(__dirname,'views'))


// End point
app.get('/demo', (req, res) => {
    res.status(200).render('demo', { title: 'Hey Tushar', message: 'Hello there! Me' })
  })
app.get("/",(req,res)=>{
    res.status(404).send("This is my Home express app")
});
app.get("/about",(req,res)=>{
    res.send("This is my about express app")
});
app.get("/this",(req,res)=>{
    res.status(404).send("This is error not fount")
});
app.post("/about",(req,res)=>{
    res.send("This is my about post express app")
});

app.listen(port,()=>{
    console.log(`The application started succesfully on port ${port}`);
});