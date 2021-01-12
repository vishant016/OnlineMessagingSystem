const mongoose=require('mongoose');
const Schema=mongoose.Schema
const userSchema=new  Schema({
      //_id:mongoose.Types.ObjectId,
       email:String,
       username:String,
       mobileno:String,
       password:String,
       bio:String,
      website:String
});

module.exports=mongoose.model('user',userSchema,'user')

