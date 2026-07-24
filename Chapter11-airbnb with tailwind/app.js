const express = require('express')
const path = require('path')

//Local module
const userRouter = require('./routes/userRoutes')
const hostRouter = require('./routes/hostRoutes')
const rootDir = require('./utils/pathUtil')
const app = express();

app.use(express.urlencoded());
app.use(userRouter);
app.use("/host",hostRouter);
app.use(express.static(path.join(rootDir , 'public')))

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir, 'views','404-not-found.html'))
})

const PORT = 3003;
app.listen(PORT, ()=>{
    console.log("Server started on port 3003")
})