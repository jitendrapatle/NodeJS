const express = require('express')
const path = require('path')


//Local module
const {storeRouter} = require('./routes/storeRouter')
const {hostRouter} = require('./routes/hostRouter')
const rootDir = require('./utils/pathUtil')
const app = express();
const {pagenotfound} = require('./controllers/404Controller')

app.set('view engine','ejs')
app.set('views','views')

app.use(express.urlencoded());
app.use(storeRouter);
app.use("/host",hostRouter);
app.use(express.static(path.join(rootDir , 'public')))


app.use(pagenotfound)

const PORT = 3003;
app.listen(PORT, ()=>{
    console.log("Server started on port 3003")
})