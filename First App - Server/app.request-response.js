const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
    console.log(req.headers, req.method, req.url)

    if (req.url === "/") {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
        <html>
            <head><title>My first Node App</title> </head>
            <body>
                <h1>This is default home page </h1> 
            </body>
        </html>`);
       return res.end();
    }
    else if (req.url === '/user') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>
            <head><title>My first Node App</title> </head>
            <body>
                <h1>Enter user name </h1>
                <form action="/from-submitted" method="POST">
                    <input name="username" type="text" placeholder="Enter your name">
                    <br>
                    <button type="submit">Submit Name<button>
                </from>
            </body>
        </html>
            `)
       return res.end()
    }
    else if(req.url.toLowerCase() === '/from-submitted' && req.method == 'POST'){
        fs.writeFileSync('user.txt', "Jitendra")
        res.statusCode = 302;
        res.setHeader('Location' , '/')
    }
    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <html>
            <head><title>My first Node App</title> </head>
            <body>
                <h1>My First NODE APP </h1>
 
            </body>
        </html>`);
    res.end();
})

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server runnig at http://localhost:${PORT}`)
})  