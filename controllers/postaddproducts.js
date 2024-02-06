const promodel=require("./dbproductmodel");
const findfive=promodel.findfive;
module.exports=(req,res)=>
{
    x=req.body.x;
    let products=findfive(x)
    products.then(function(products)
    {
        res.send(JSON.stringify(products));
    })
}