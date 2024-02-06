const ProductModel=require("../models/Product");
async function find_all()
{
    let data=await ProductModel.find();
    return data;
}
async function findfive(x)
{
   let product= await ProductModel.find().skip(x).limit(5)
   return product;
}
async function create_new(ob)
{
    let product=await ProductModel.create(ob)
    return product;
}
async function find_one(id)
{
    let product=await ProductModel.find({product_id:id})
    return product;
}
async function delete_one(id)
{
    let product=await ProductModel.deleteOne({product_id:id})
    return product;
}
async function findunique(id)
{
    let product=await ProductModel.findOne({product_id:id})
    return product;
}
async function update_one(id,productname,discription,price,quantity)
{
    let product=await ProductModel.updateOne({product_id:id},{$set:{productname:productname,details:discription,price:price,quantity:quantity}})
    return product;
}
module.exports={findfive,find_all,create_new,find_one,delete_one,findunique,update_one}