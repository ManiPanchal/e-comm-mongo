const dbproductmodel=require("./dbproductmodel");
const find_all=dbproductmodel.find_all;
module.exports=(req,res)=>{
    let data=find_all()
    data.then(function(data)
    {
        res.send(JSON.stringify(data));
    })
}