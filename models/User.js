const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    isvalid:Boolean,
    mailToken:Number
});
const User=mongoose.model("User",userSchema);
module.exports=User;