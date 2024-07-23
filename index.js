import express from 'express';
const app = express();
const port = 3000

app.get('/',function (req,res){
    res.send("Hello World")
    console.log(req)
}
);

app.listen(3000, function(){
console.log("I am on Port 3000")
})
