const express = require('express')
const path = require('path')


//Local module
const {mainRouter} = require('./routes/mainRoutes')
const {hostRouter} = require('./routes/hostRoutes')
const rootDir = require('./utils/pathUtil')
const app = express();

app.set('view engine','ejs')
app.set('views','views')

app.use(express.urlencoded());
app.use(mainRouter);
app.use("/host",hostRouter);
app.use(express.static(path.join(rootDir , 'public')))

app.use((req,res,next)=>{
    // res.status(404).sendFile(path.join(rootDir, 'views','404-not-found.html'))
    res.status(404).render('404', {pageTitle: "Page not found"})
})

const PORT = 3003;
app.listen(PORT, ()=>{
    console.log("Server started on port 3003")
})