const dbcartmodel=require("./dbcartmodel");
const find_one=dbcartmodel.find_one;
const create_new=dbcartmodel.create_new;
module.exports=(req,res)=>{
            if(req.session.is_logged_in)
            {
              
                let product=find_one(req.body.product_id,req.session.email)
                product.then(function(product)
                {
                    if(product)
                      {
                         res.end("already");
                         return;
                      }
                      else {
                        
                        const cart={email:req.session.email,product_id:req.body.product_id,quantity:1};
                        let data=create_new(cart)
                         data.then(function()
                         {
                            res.end("okk");
                          })
                        }
                  })   
            }
            else{
                res.end("ok");
                
            }
    }
    