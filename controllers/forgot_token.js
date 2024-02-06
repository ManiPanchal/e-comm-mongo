const dbforgot_token=require("./dbforgot_token");
module.exports=(req,res)=>
{
    const {token} =req.params;
    let data=dbforgot_token(token);
    data.then((data)=>
    {
        req.session.user=data;
        req.session.email=data.email;
        req.session.user.isvalid=true;
        req.session.is_logged_in=true;
        res.redirect("/changepassword");
    },()=>
    {
        console.log("err");
        res.redirect("/forgot");
    })     
}
