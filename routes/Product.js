const router = require('express').Router()
const User = require('../model/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')
const { text } = require('express')
const Admin =require('../model/isAdmin')
const multer = require('multer')
const Product = require('../model/Product')
const AchatProduct = require('../model/ProductAchat')
const Catgory =require('../model/Catgory')
const storage=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null , "./client/public/uploads/")
    }, 
    filename:(req,file,callback)=>{
        callback(null , file.originalname)
    }
})
const upload = multer({storage:storage})

router.post('/Produc',upload.single("articleImage"),async(req,res)=>{
   const Name=req.body.Name
    const Descraption =req.body.Descraption
   const Prix=req.body.Prix
   const Catgory =req.body.Catgory
   try{
     if(!Name||!Prix  || !Catgory ||!req.file.originalname){
        return res.json({msg:"Entre all input"})
     }
       const ProductAdd = new Product({Name , Prix ,Descraption,Image:req.file.originalname, Catgory}); 
       await ProductAdd.save();
    return res.json({msg:"Product add"})
      
//    {console.log(req.file.originalname)}
      
//    {console.log(Name)}
      
   
   }catch(error){
    console.log(error)
   }
  
  
})


router.get('/Produc',async(req,res)=>{
  
    try{
      
        
       const ProductAll =  await Product.find()
     return res.json({msg:"ProductAll",ProductAll})
       
 //    {console.log(req.file.originalname)}
       
 //    {console.log(Name)}
       
 
    
    }catch(error){
     console.log(error)
    }
   
   
 })

 router.delete('/Produc/:id',async(req,res)=>{
    const{id}=req.params
    try{
      
        
       const ProductAll =  await Product.findByIdAndDelete({_id:id})
     return res.json({msg:"Deleted",ProductAll})
       
 //    {console.log(req.file.originalname)}
       
 //    {console.log(Name)}
       
 
    
    }catch(error){
     console.log(error)
    }
   
   
 })
 
 router.put('/Produc/:_id',async(req,res)=>{
    const{_id}=req.params
    try{
      
        
       
       const ProductAll = await Product.findOneAndUpdate({_id}, { $set: req.body })
    
     return res.json({msg:"Update" , ProductAll})
       
 //    {console.log(req.file.originalname)}
       
 //    {console.log(Name)}
       
 
    
    }catch(error){
     console.log(error)
    }
   
   
 }) 
 router.post('/ProducAchat',async(req,res)=>{
    const {name,lastName,email,telephone,NameProduct,Image,Prix} = req.body
try{
  
   const ProductAchat = new AchatProduct({name , lastName ,email,telephone,NameProduct,Image,Prix},); 
   await ProductAchat.save();
   res.json({msg:"SavedData",ProductAchat})
}catch(error){
   console.log(error)
}
 })


 router.get('/ProductAchat' , async(req,res)=>{
    try{
      const GetProductAchat = await AchatProduct.find() 
      res.json({msg:"Product Gete" , GetProductAchat})
    }catch(error){
      console.log(error)
    }
 })

 router.post('/Catgory',async(req,res)=>{
   const {name} = req.body
try{
   // Catgory
   // const NewCatgory = new Catgory({Catgorys}); 
   // await NewCatgory.save();
   // res.json({msg:"Catgorie add"})
   // const CatgoryAll = await Catgory.find() 
   // res.json({msg:"Data",CatgoryAll})

   if(!name){
      return res.json({msg:"Entre filed"})
   }
   const FindOneCatgory =  await Catgory.findOne({name})
   if(FindOneCatgory){
      res.json({msg:"there is catgory with the same name"})
   }
   if(!FindOneCatgory){
      const dzadazdad = new Catgory({name});  
      await dzadazdad.save()
       res.json({msg:"CatgoryEnrigstred"})
   }
  
}catch(error){
  console.log(error)
}
})


router.get('/Catgory',async(req,res)=>{
   
try{
   // Catgory
   // const NewCatgory = new Catgory({Catgorys}); 
   // await NewCatgory.save();
   // res.json({msg:"Catgorie add"})
   const CatgoryAll = await Catgory.find() 
    res.json({msg:"Data",CatgoryAll})

  
}catch(error){
  console.log(error)
}
})
//login 


module.exports = router;