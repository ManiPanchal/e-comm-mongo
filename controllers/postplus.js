const dbproductmodel=require("./dbproductmodel");
const findunique=dbproductmodel.findunique;
const dbcartmodel=require("./dbcartmodel");
const update_one=dbcartmodel.update_one;
module.exports=(req,res)=>{
    let value=parseInt(req.body.q);
    let products=findunique(req.body.id)
    products.then(function(product)
    { 
        if(product.quantity>=value)
        {
            let data=update_one(req.session.email,req.body.id,value)
            data.then(function()
            {
                    res.end("ok");
                    return;
            });
        }
        else{
            res.end("okk");
            return;
        }
    }) 
}