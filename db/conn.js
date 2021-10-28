const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://Harsh9981:9981%40Harsh@cluster0.0kobt.mongodb.net/Swastik?retryWrites=true&w=majority',{
        useUnifiedTopology: true,
    useNewUrlParser: true,
 }).then(()=>{
         console.log("connection sucess");
 }).catch((error)=>{
        console.log(error);
 })

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        minLength:3
    },
    mail: {
        type:String,
        required:true
       
    },
    number: {
        type:Number,
        required:true,
        min:3
    },
 
  });
//   creating mongoose.Collection

  const User = mongoose.model('Contacts', userSchema);
  module.exports = User;

 

     

