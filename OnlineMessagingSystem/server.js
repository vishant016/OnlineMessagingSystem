const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors')

const port=3000
const api=require('./routes/api')
const app=express();
const path=require('path')



app.listen(process.env.PORT || 8080)

var server=require('http').createServer(app)
var io=require('socket.io')(server)

io.on('connection',function(socket){
    console.log('user connected')
    // var data=sessionStorage.getItem('currentUser')
   // socket.emit('test event',data)
   socket.on('my message',(msg)=>{
     socket.broadcast.emit('my broadcast',msg)
    // console.log('message : '+msg)
   })
})


app.use(cors())
app.use(bodyParser.json())
 app.use('/api',api)
 if(process.env.NODE_ENV==='production'){
  app.use(express.static(__dirname+'/dist'))
  
  app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'OnlineMessagingSystem','dist','index.html'))
  })
 }
// app.get('/',function(req,res){
//   res.send('hello from server')
// })



server.listen(3000,()=>{
  console.log('listening on port 3000')
})

// app.listen(port,function(){
//   console.log('server running on localhost : '+port)
// })
