const dbproductmodel=require("./dbproductmodel");
const update_one=dbproductmodel.update_one;
module.exports=(req,res)=>{
    let product=update_one(req.body.id,req.body.productname,req.body.discription,req.body.price,req.body.quantity)
    product.then(function()
    {
        res.end("ok");
    })
}