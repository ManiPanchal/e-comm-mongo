const dbcartmodel=require("./dbcartmodel");
const find_email=dbcartmodel.find_email;
const dbproductmodel=require("./dbproductmodel");
const find_one=dbproductmodel.find_one;
module.exports=(req,res)=>{
    let items=[];
    req.session.is_logged_in=true;
    req.session.user.isvalid=true;
    let cart=find_email(req.session.email)
    cart.then(async function(cart)
    {
            for(let i=0;i<cart.length;i++)
            {
               let product=await find_one(cart[i].product_id)
                .then(function(product)
                {
                    product[1]={};
                    product[1].curr=cart[i].quantity;
                    items.push(product);
                })
            }
                res.send(JSON.stringify(items));
                return;
    },()=>{
        res.end("wrong");
    })  
}