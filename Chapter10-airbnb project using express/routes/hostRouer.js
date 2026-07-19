const express = require('express')

const hostRouter = express.Router()

hostRouter.get("/",(req,res,next)=>{
    res.send(`
        <h1>Welcome to Airbnb</h1>
        <a href="/host/add-home">Add home</a>
        `)
})

module.exports = hostRouter;