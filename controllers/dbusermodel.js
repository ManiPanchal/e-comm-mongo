const UserModel=require("../models/User");
async function finduser(token)
{
    let user=await UserModel.findOne({mailToken:token})
    return user;
}
async function updateuser(token,t)
{
    let user=await UserModel.updateOne({mailToken:token},{$set:{isvalid:t}})
    return user;
}
async function findemail(email)
{
    let user=await UserModel.findOne({email:email})
    return user;
}
async function updatepass(email,value)
{
    let user=await UserModel.updateOne({email:email},{$set:{password:value}})
    return user;
}
async function findunique(name,email,password)
{
    let user=await UserModel.findOne({name:name,email:email,password:password})
    return user;
}
async function create_user(ob)
{
    let user=await UserModel.create(ob)
    return user;
}
module.exports={finduser,updateuser,findemail,updatepass,findunique,create_user};