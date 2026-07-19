const express = require('express')

//Local module
const userRoutes = require('./routes/userRoutes')
const hostRoutes = require('./routes/hostRouer')

const app = express();
 
app.use(express.urlencoded());
app.use(userRoutes);
app.use(hostRoutes);
 

const PORT = 3003;
app.listen(PORT, ()=>{
    console.log("Server started on port 3003")
})