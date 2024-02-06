const CartModel=require("../models/CartM");
async function find_one(id,email)
{
    let data=await  CartModel.findOne({product_id:id,email:email})
    return data;
}
async function create_new(ob)
{
    let data=await CartModel.create(ob)
    return data;
}
async function find_email(email)
{
    let data=await CartModel.find({email:email})
    return data;
}
async function delete_one(email,value)
{
    let data=await CartModel.deleteOne({email:email,product_id:value})
    return data;
}
async function update_one(email,id,q)
{
    let data=await CartModel.updateOne({email:email,product_id:id},{$set:{quantity:q}})
    return data;
}
module.exports={find_one,create_new,find_email,delete_one,update_one};
