const mongoose = require('mongoose')
//Require schema from mongoose 
const Schema = mongoose.Schema 
//Ceat the user shema 
const CatgorySchema = new Schema({
    name:{
        type:String,
      
    },

}); 


module.exports=Catgory= mongoose.model('Catgory02',CatgorySchema)