const sendMail=require("../methods/sendmail");
const dbusermodel=require("./dbusermodel");
const find_one=dbusermodel.findemail;
const create_user=dbusermodel.create_user;
module.exports=(req, res) => {
    let user=find_one(req.body.email)
    user.then(function(user)
    {
        if(user)
        {
            res.end("exist");
            return;
        }
        else{
            let user={name:req.body.name,email:req.body.email,password:req.body.password,isvalid:false,mailToken:Date.now()};
            req.session.email=req.body.email;
            req.session.mailToken=user.mailToken;
            req.session.user=user;
            sendMail(req.body.email,user.mailToken,`<h1>Welcome</h1><a href='http://127.0.0.1:8000/verifymail/${user.mailToken}'>clickhere...</a>`,function(err,data)
            {
                if(err)
                {
                    res.render("signup",{name:"something went wrong"});
                    return;
                }
                // req.session.is_logged_in=true;
                let data2=create_user(user)
                data2.then(function()
                {
                    res.end("check");
                    return;
                })
                .catch(function(err)
                {
                    res.render("signup",{data:"something went wrong"});
                })
                return;
            })
        }
           
    })
}