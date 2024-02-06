const usermethods = require("./dbusermodel");
const finduser=usermethods.finduser;
const updateuser=usermethods.updateuser;
module.exports=function(req,res){
    const {token} =req.params;
 let users=finduser(token)
  users.then(function(users)
  {
              if(req.session.user)
              {
                  req.session.user.isvalid=true;
              }
              else{
                  req.session.is_logged_in=true;
                  req.session.user=users;
                  req.session.user.isvalid=true;
                 let u=updateuser(token,true)
                  u.then(function(u)
                  {
                      res.redirect("/product");
                      return;   
                  },function(err)
                  {
                      res.render("signup",{name:"Something went wrong"});
                      return;
                  })
              }      
  },function(err)
  {
     res.render("signup",{name:"User not found"});
  })
  }
 