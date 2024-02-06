const mongoose=require("mongoose");
module.exports.init=async function(){
   await mongoose.connect('mongodb+srv://manishapanchal5591:BQ29yifc61izvsXO@cluster0.c4t3rwh.mongodb.net/ecomm?retryWrites=true&w=majority')
}