module.exports=function getlogin(req, res)
 {
    
    if (req.session.is_logged_in) {
      if(req.session.email=="manishapanchal5591@gmail.com")
      {
        res.redirect("/admin");
        return;
      }
      else{
        res.render("product",{data:req.session.user.name});
        
        return;
      }
        
    }
    else {
        res.render("login",{data:""});
        return;
    }
}
