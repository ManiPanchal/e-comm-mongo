const dbcartmodel=require("./dbcartmodel");
const update_one=dbcartmodel.update_one;
module.exports=(req,res)=>{
    if(req.body.q>0)
    {
        let user=update_one(req.session.email,req.body.id,req.body.q)
        user.then(function(user)
        {
            if(user)
            {
                res.end("ok");
                return;
            }  
        })  
    }
    else
    {
        res.end("okk");
    } 
}