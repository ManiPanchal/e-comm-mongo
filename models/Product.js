const mongoose=require("mongoose");
const productSchema=new mongoose.Schema({
    productname:String,
    price:String,
    quantity:Number,
    product_id:String,
    details:String,
    image:String
});
const Product=mongoose.model("Product",productSchema);
module.exports=Product;