const router = require('express').Router()
const User = require('../model/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')
const { text } = require('express')
const {validator , registerRules , loginRules} = require('../middlerwares/validator')
router.post('/register',registerRules(),validator,async(req,res)=>{
    const{name,lastName,email,password}=req.body; 
    try{
        if(!name || !lastName || !email || !password ){
                return res.json({Error :'Plese enter all fild'})
        }
         const EmailVerif = await User.findOne({email}) 
         if(EmailVerif){ 
            return res.json({Error:"Emile alerdy exist"})
         }
         const NewUser = new User({name , lastName , email , password}); 
         const salt = 10 
         const hashedPassword = await bcrypt.hash(password,salt)
         NewUser.password=hashedPassword;
         await NewUser.save();
         //Email reviver
         let transporter = nodemailer.createTransport({
             service:'gmail',
             auth:{
                 user:process.env.email,
                 pass:process.env.password
             }
         })
         let mailOpations={
             from:'wissemabidh@gmail.com',
             to:email,
             subject:'Testing and Testing',
             text:'Welcome'
         }
         transporter.sendMail(mailOpations,function(err,data){
             if(err){
                 console.log('Error',err)
             } else{
                 console.log('Email send')
             }
         })
         const payload ={
            id:NewUser._id
        };
        const token = await jwt.sign(payload , process.env.sercerOrkey)
         //response
        res.json({msg:"User register with succes",NewUser,token})
      
    }catch(error){
        console.log(error)
    }
  
})

//login 
router.post('/login',async(req,res)=>{
    const{email,password}=req.body; 
    try{
        if(!email || !password ){
                return res.json({msg :'Plese enter all fild'})
        }
         const EmailVerif = await User.findOne({email}) 
         if(!EmailVerif){ 
              res.json({msg:"bad Creadtials!"})
         }
         const isMatch= await bcrypt.compare(password , EmailVerif.password)
         if(!isMatch){
             res.json({msg:"bad creaditals!"})
         }
         const payload ={
            id:EmailVerif._id
        };
        const token = await jwt.sign(payload , process.env.sercerOrkey)
        res.json({msg:"Register succes",EmailVerif,token})
      
    }catch(error){
        console.log(error)
    }
  
})
router.get('/GetUser/:token',async(req,res)=>{
    const {token} = req.params
 
    try{
        const deacoded = await jwt.verify(token,process.env.sercerOrkey)
        const Getuser = await User.findById(deacoded.id)
        return res.json({msg:"deacoded",Getuser})
    }catch(error){
        console.log(error)
    }
  
})
module.exports = router;