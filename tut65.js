const fs = require("fs");
let text = fs.readFile("rohan.txt","utf-8",(error,data)=>{
    console.log(error,data);
});
console.log("This is a massage");