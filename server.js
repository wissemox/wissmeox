const express = require('express')
const ConnectDb = require('./config/connectDb')
const auth = require('./routes/auth')
const Admin = require('./routes/Admin')
const Product =require('./routes/Product')
const path = require('path')
const app = express()
app.use(express.json())
//Conncte data base 
ConnectDb()
//router
app.use('/api/auth',auth)
app.use('/api/Admin',Admin)
app.use('/api/Product',Product)
//Server
if(process.env.NODE_ENV==='production') {
    app.use(express.static('client/build'))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}
const port = process.env.PORT || 5000 

app.listen(port , (error)=>{
    error ? 
    console.log(error)
    :console.log('the server is runnig on port' ,port)
})
