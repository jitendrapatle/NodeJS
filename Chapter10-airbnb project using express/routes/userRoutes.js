const express = require('express')

const userRouter = express.Router()

userRouter.get("/host/add-home",(req,res,next)=>{ 
    res.send(`
        <h1>Regiter your home</h1>
         <form action="/host/add-home" method="POST">
         <input type="text" name="houseName">
         <input type="submit">
         </form>
        `)
})

userRouter.post("/host/add-home",(req,res,next)=>{ 
    console.log(req.body);
    res.send(`
        <h1>Register successfully</h1>
        <a href="/">Go home</a>
        `)
})

module.exports = userRouter;