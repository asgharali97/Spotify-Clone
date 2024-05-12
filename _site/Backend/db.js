const mongoose = require ('mongoose')

const connect =()=>{
    const c =mongoose.connect("mongodb://0.0.0.0:27017/spotify-clone")
   .then(()=>{
       console.log("mongodb connected");
   })
   .catch(()=>{
       console.log('failed');
   })
 }
 module.exports=connect    