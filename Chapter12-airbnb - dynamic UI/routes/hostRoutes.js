const express = require('express')

const path = require('path')
// const rootDir = require('../utils/pathUtil')
const hostRouter = express.Router()

hostRouter.get("/add-home",(req,res,next)=>{ 
    // res.sendFile(path.join(rootDir,'views','user.html'))
    res.render('user', {pageTitle : "Airbnb - Add Homes"})
})

const registredHomes = [];

hostRouter.post("/add-home",(req,res,next)=>{  
    registredHomes.push({houseName : req.body.houseName})
    // res.sendFile(path.join(__dirname,'../','views','user-success.html'))
    
    res.render('user-success', {pageTitle : "Airbnb - Home added"})
})

exports.hostRouter = hostRouter;
exports.registredHomes = registredHomes;