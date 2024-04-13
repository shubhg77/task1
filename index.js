const express =  require("express");
const path = require("path")
const hbs = require("hbs")
const collection = require("./mongodb") 

const port = 8080;
const app = express();
const templatePath = path.join(__dirname,'../Templates')

app.use(express.json());
app.set("view engine","hbs");
app.set("views",templatePath)
app.use(express.urlencoded({extended:false}))



app.get("/",(req,res)=>{
    res.render("login");
}) 

app.get("/signup",(req,res)=>{
    res.render("signup");
}) 

app.post("/signup",async(req,res)=>{
    const data={
        name:req.body.name,
        password:req.body.password
    }

    await collection.insertMany([data])
    res.render("home",{naming:req.params.name})

})

//Login

app.post("/login",async(req,res)=>{
    try{
        const check = await collection.findOne({name:req.body.name })
        if(check.password === req.body.password ){
              res.render("home")
        }
        else{
            res.send("Wrong Password")
        }
    }
    catch{
        res.send("Wrong Details")

    }

    
  

})



app.listen(8080,()=>{
    console.log(`server is running on port ${port}`);
})