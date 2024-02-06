const dbproductmodel=require("./dbproductmodel");
const delete_one=dbproductmodel.delete_one;
module.exports=(req,res)=>
{
    let product=delete_one(req.body.id)
    product.then(function(product)
    {
        if(product)
        {
            res.end("ok");
        }
    })
}