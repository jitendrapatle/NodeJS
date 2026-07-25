const express = require('express')

const path = require('path')
// const rootDir = require('../utils/pathUtil')
const hostRouter = express.Router()

hostRouter.get("/add-home",(req,res,next)=>{ 
    // res.sendFile(path.join(rootDir,'views','user.html'))
    res.render('add-home', {pageTitle : "Airbnb - Add Homes", currentPage:'addhome'})
})

const registredHomes = [];

hostRouter.post("/add-home",(req,res,next)=>{  
    registredHomes.push(req.body)
    // res.sendFile(path.join(__dirname,'../','views','user-success.html'))
    
    res.render('home-added', {pageTitle : "Airbnb - Home added", currentPage:'home-added'})
})

exports.hostRouter = hostRouter;
exports.registredHomes = registredHomes;