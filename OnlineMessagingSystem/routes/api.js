const express=require('express')
const router=express.Router()
const bodyparser=require('body-parser')
const nodemailer=require('nodemailer')
const urlEncoder=bodyparser.urlencoded({extended:false})
// const {check,validationResult}=require('express-validator')
// mongodb+srv://user1:user1@messaging.yl06z.mongodb.net/users?retryWrites=true&w=majority
const User=require('../models/users')

// mongodb+srv://user1:<password>@cluster0.yl06z.mongodb.net/users?retryWrites=true&w=majority
// mongodb://localhost:27017/user
// mongodb://user1:<password>@cluster0-shard-00-00.yl06z.mongodb.net:27017,cluster0-shard-00-01.yl06z.mongodb.net:27017,cluster0-shard-00-02.yl06z.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-bnwfrc-shard-0&authSource=admin&retryWrites=true&w=majority

const mongoose=require('mongoose')
mongoose.connect(process.env.MONGODB_URI ||'mongodb://user1:Aero%408787878787@cluster0-shard-00-00.yl06z.mongodb.net:27017,cluster0-shard-00-01.yl06z.mongodb.net:27017,cluster0-shard-00-02.yl06z.mongodb.net:27017/users?ssl=true&replicaSet=atlas-bnwfrc-shard-0&authSource=admin&retryWrites=true&w=majority',
{ useNewUrlParser: true,useUnifiedTopology: true }  ,
err=>{
  if(err){
    console.log('Error'+err)
  }else{
    console.log('connected to Mongodb')
  }
})

router.get('/',(req,res)=>{

  res.send('hello fro api')
})

router.get('/findUser',(req,res)=>{
  var username= User.find({}, {username:1,_id:0})
//  console.log(JSON.parse(username))
username.exec(function(err,data){
  if(err) throw err
  res.send(data)
})
})

router.post('/forgotPassword',async (req,res)=>{
  let data=(req.body)
  console.log("email:"+data.email)
  console.log("otp:"+data.otp)
  let transporter=nodemailer.createTransport({
    service:'gmail',
    // host: "smtp.gmail.com",
    auth:{
      user:'vishant16.vaghani@gmail.com',
      pass:'vishant@8787878787'
    }
  })
  // var otp=Math.random() * (100000 -100) + 100;

  var mailOptions = {
    from: 'vishant16.vaghani@gmail.com',
    to: data.email,
    subject: 'Forgot password',
    text: 'your otp is :'+data.otp
  };

  transporter.sendMail(mailOptions,function(error, info){
    if (error) {
      console.log( "error"+error);
    } else {
      // console.log('Email sent: ' + info.response+ otp);
      res.status(200).send()
    }
  });

})

router.post('/changePassword',(req,res)=>{
  let changeData=req.body
  console.log(changeData.email)
  User.updateOne({'email':changeData.email},{$set:{'password':changeData.password}},
  (err,edit)=>{
    if(err){
      console.log(err)
    }
    else{
      res.status(200).send({msg:'password changed'})
    }
  })
})


router.post('/profile',(req,res)=>{
  let profileData=(req.body)

  User.updateOne({'username':profileData.oldusername},{$set:{'bio':profileData.bio}} ,(err,edit)=>{
    if(err){
      console.log(err)
    }
    else{
      res.status(200).send()
    }
  })

  User.updateOne({'username':profileData.oldusername},{$set:{'website':profileData.website}} ,(err,edit)=>{
    if(err){
      console.log(err)
    }
    else{
      res.status(200).send()
    }
  })

  // console.log(profileData.oldusername)
  User.updateOne({'username':profileData.oldusername},{$set:{'username':profileData.username}} ,




  (err,edit)=>{
    if(err){
      console.log(err)
    }
    else{
      res.status(200).send()
    }
  })



})

router.post('/register',
(req,res)=>{
  let userData=req.body
  //console.log("userData:"+userData.email)
  User.findOne({email:userData.email},(err,user)=>{
    if(user){
       res.status(200).send({msg:"Email is already taken"})
    }
    else{
      User.findOne({username:userData.username},(err,userr)=>{
        if(userr){
          res.status(200).send({msgg:"Username is already taken"})
        }
        else{
          let user=new User(userData)
          user.save((error,registeredUser)=>{
            if(error){
              console.log(error)
            }
            else{
           res.status(200).send({msg:'Registration done'})
           //res.redirect('http://localhost:4200/login')
            }
          })
        }
      })
    }
  })

  // console.log(user)

})


router.post('/login',(req,res)=>{
  let userData=req.body

  User.findOne({email:userData.email},(error,user)=>{
    if(error){
      console.log(error)
    }
    else{
      console.log(user)
      if(user==null){
        console.log("user"+user)
        res.status(200).send({msg:'Invalid email'})
      }else{
        if(user.password != userData.password){
          res.status(200).send({msgg:'Invalid password'})
        }else{
          res.status(200).send(user)
        }
      }
    }
  })
})

module.exports=router



