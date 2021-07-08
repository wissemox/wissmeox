const mongoose = require('mongoose')
//Require schema from mongoose 
const Schema = mongoose.Schema 
//Ceat the user shema 
const AchatProductSchema = new Schema({
    name:{
        type:String,
        
    },
    lastName:{
        type:String,
       
    },
    email:{
        type:String,
       
    },
    telephone:{
        type:Number , 
    }, 
    NameProduct:{
        type:String,
    }, 
    Image:{
        type:String,
    },
    Prix:{
        type:Number,
    }
    
}); 

module.exports=AchatProduct= mongoose.model('AchatProduct',AchatProductSchema)