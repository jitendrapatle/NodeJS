const express = require('express')

const path = require('path')

const {registredHomes} = require('./hostRoutes')

// const rootDir = require('../utils/pathUtil')


const mainRouter = express.Router()

mainRouter.get("/",(req,res,next)=>{
        console.log("registered data is- ", registredHomes)
        // res.sendFile(path.join(rootDir,'views','home.html'))
        res.render('home', {registredHomes: registredHomes, pageTitle: "Airbnb Home"})
})

exports.mainRouter = mainRouter;