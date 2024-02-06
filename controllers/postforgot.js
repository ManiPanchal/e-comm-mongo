const sendMail=require("../methods/sendmail");
const dbusermodel=require("./dbusermodel");
const find_email=dbusermodel.findemail;
module.exports=(req,res)=>{
    let user=find_email(req.body.value)
    user.then(function(user)
    {
        if(user)
        {
            sendMail(user.email,user.mailToken,`<h1>Welcome </h1><h2>Click the link to reset your password</h2><a href="http://127.0.0.1:8000/forgot/${user.mailToken}">clickhere...</a>`,function(err,data)
                {
                    if(err)
                    {
                        res.render("forgot",{data:"something went wrong"});
                        return;
                    }
                    req.session.is_logged_in=true;
                     res.end("ok");
                     return;
                })
        }
        else{
            res.render("forgot",{data:"something went wrong"});
            return;
        }           
    }) 
}