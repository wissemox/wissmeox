const router = require('express').Router()
const User = require('../model/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')
const { text } = require('express')
const Admin =require('../model/isAdmin')


router.post('/Admin/:id',async(req,res)=>{
    const {id} = req.params
   try{
    const AdminAll = await Admin.findById({_id:id})
    return res.json({msg:AdminAll})
   }catch(error){
    console.log(error)
   }
  
  
})
router.post('/AdmiGe',async(req,res)=>{
   const GetAadmin=await Admin.find()
   res.json({msg:"dazd",GetAadmin})
})
//login 


module.exports = router;