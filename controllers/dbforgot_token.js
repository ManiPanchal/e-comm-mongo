const { Promise } = require("mongoose");
const UserModel=require("../models/User");
module.exports=async function findout(token)
{
    let user= await UserModel.findOne({mailToken:token})
     return user;
}
    

