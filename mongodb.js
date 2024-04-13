const mongoose   = require("mongoose");

mongoose.connect("mongodb://localhost:27017/loginAuth")
.then(()=>{
    console.log("mongodb Connected")
}).catch(()=>{
    console.log("mongob connection error");
})

const LoginSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})
    const collection = new mongoose.model("collections1",LoginSchema)

    module.exports = collection;  
