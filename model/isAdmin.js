const mongoose = require('mongoose')
//Require schema from mongoose 
const Schema = mongoose.Schema 
//Ceat the user shema 
const AdminShema = new Schema({
    name:{
        type:String,
       
    },
    lastName:{
        type:String,
       
    },
    email:{
        type:String,
       
       
    },
    password:{
        type:String,
       
    },
}); 

module.exports=Admin= mongoose.model('Admin',AdminShema)