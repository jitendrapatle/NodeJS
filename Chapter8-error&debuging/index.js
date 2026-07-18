const http = require('http');
const syntexCheck = require('./syntex-check')

const server = http.createServer((req,res)=>{
    console.log("Server created fn ",req)
    syntexCheck();

     res.setHeader('Content-Type','text/html');
    res.write(`
        <h1>Page not found</h1>
            <a href="/">Return to Home</a>
        `)
    return res.end()
})

const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
});