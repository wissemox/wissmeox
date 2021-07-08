const mongoose = require('mongoose');

//Require schema from mongoose 
const Schema = mongoose.Schema 
//Ceat the user shema 
const ProductSchema = new Schema({
    Name:{
        type:String,
        required: true,
        unique:true

    },
    Prix:{
        type:Number,
        required: true
    },
    Catgory:{
        type:String , 
        require:true
    },
    Descraption:{
        type:String , 
    },
    Image:{
        type:String,
        required: true,
        unique:true
    },
   
}); 

module.exports=Product= mongoose.model('Product',ProductSchema)