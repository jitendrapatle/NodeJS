const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log("Default middeleware loaded" ,req.path , req.method)
    next()
});
app.use((req,res,next)=>{
    console.log("Second middelware from get req")
    next()
})

app.get("/",(req,res,next)=>{
    console.log("Third middelware from get req")
    res.send(`<p>Get the response from 3rd middelware</p>
        <a href="/contsct-us">Contact us</a>
        `)
})
app.get("/contsct-us",(req,res,next)=>{
    res.send(`
        <form action="/contsct-us" method="POST">
        <input name="name" value="Jitendra">
        <input name="email" value="Jitendra@gmail.com">
        <input type="submit" value="Submit">
        </form>
        `)
})
app.post("/contsct-us",(req,res,next)=>{
    res.send(`
        
        <h2>That you!</h2>
        `)
})

const PORT = 3002;
app.listen(PORT, ()=>{
    console.log("Express server started")
})