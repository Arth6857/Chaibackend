require('dotenv').config()
const express=require('express')
const app=express()
const port=4000
    app.get('/',(req,res)=>{
        res.send('Welcome to my app')
    })
    app.get('/twitter',(req,res)=>{
        res.send('Welcome to Twitter')
    })
    app.get('/login',(req,res)=>{
        res.send('<h1>Please login at chai aur code</h1>')
    })
    app.listen(process.env.port,()=>{
        console.log(`Server is running on port ${port}`)
    })



