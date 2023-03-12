const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 80;

app.use('/static',express.static('static'))
app.use(express.urlencoded())


app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

// set view directory
app.get('/',(req,res)=>{
    const con = "This is the best content on the internet"
    const params = {'title': 'pubg is the best',"content": con}
    res.status(200).render('index.pug',params);
})

app.post('/',(req,res)=>{
    name = req.body.name;
    age = req.body.age;
    gender = req.body.gender;
    address = req.body.address;
    more = req.body.more;

    let outputtowrite = `The name of the client is ${name},${age} years old, ${gender},residing at ${address}. More about him/her : ${more}`;
    fs.writeFileSync('output.txt',outputtowrite)

    const params = {'message' : 'Your form has been submitted succesfully'}
    res.status(200).render('index.pug',params);
})

// End point

// start a port
app.listen(port,()=>{
    console.log(`The application started succesfully on port ${port}`);
});