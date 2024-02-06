const dbcartmodel=require("./dbcartmodel");
const delete_one=dbcartmodel.delete_one;
module.exports=(req,res)=>
{
    let data=delete_one(req.session.email,req.body.value)
     data.then(function(item)
     {
         if(item)
         {
            res.end("ok");
            return;
         }
     })  
}