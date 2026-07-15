const http = require('http')
const mainHandler = require('./handler')
const server = http.createServer(mainHandler)

const PORT = 3000;
server.listen(PORT,()=>{
    console.log("Server is running on localhost:"+PORT )
})