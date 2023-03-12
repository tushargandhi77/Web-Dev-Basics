const fs = require("fs");
let text = fs.readFileSync("rd.txt","utf-8");
text = text.replace("text","Tushar");

console.log(text);

fs.writeFileSync("rohan.txt",text);