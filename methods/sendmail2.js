


/**
 *
 * Run:
 *
 */
const Mailjet = require('node-mailjet')
const mailjet=new Mailjet(
    {
      apiKey:"b73a610644221fd0c140e36e9f4c7164",
      apiSecret:"fb855a85c933bad16914e6da674aa7c4"
    })
module.exports = function(email,token,data)
  {
    return new Promise((resolve,reject)=>{
      
    
    console.log(email)
    const request = mailjet.post('send', { version: 'v3.1' }).request({
        Messages: [
          {
            From: {
              Email: 'manishapanchal5591@gmail.com',
              Name: 'E-Mart',
            },
            To: [
              {
                Email: email,
                Name: 'We dont need',
              },
            ],
            Subject: 'one last step',
            TextPart: 'if you enjoy purchase expensive product',
            HTMLPart:data,
          },
        ],
      })
    .then(result => {
        console.log(result.body);
        // callback(null,result.body);
        resolve(result.body)
      })
      .catch(err => {
        console.log(err);
        // callback(err,null);/
        reject(err);

      })})
    //   request
    //     .then(result => {
    //       console.log(result.body);
    //       callback(null,result.body);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //       callback(err,null);
    //     })
  }
 


  //  app.post("/change_password",(req,res)=>
// {
//     // console.log(req.body);
//     UserModel.findOne({email:req.session.email})
//     .then(function(user)
//     {
//         if(user)
//         {
//             UserModel.updateOne({email:req.session.email},{$set:{password:req.body.value}})
//             .then(function(user)
//             {
//               sendMail2(req.session.email,user.mailToken,"<h1>Password change successfully</h1>")
//               .then((result)=>{
//                 console.log(result);
//                         req.session.is_logged_in=true;
//                         req.session.user.isvalid=true;
//                         if(req.session.email=="manishapanchal5591@gmail.com")
//                         {
//                           res.end("okk");
//                           return;
//                         }
//                         else
//                          {                        
//                            res.end("ok");
//                            return;
//                           } 
//               })
//               .catch((err)=>{
//                 console.log(err);
//               })
//             })
//             .catch(function(err)
//             {
//               res.send("something went wrong");
//               return;
//             })
//         }
//         else{
//             res.render("changepassword",{data:"something went wrong"});
//             return;
//         }
          
//     })
//  })