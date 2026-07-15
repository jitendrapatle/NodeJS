const http = require('http');

const createPracticeServer = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.setHeader('Content-Type','text/html');
        res.write(`
            <html>
            <head><title>Node app with navigation meu</title> </head>
            <body>
                <h1>This is home page with Nav </h1>
                <nav>
                    <ul>
                        <li><a href="/"> Home</a></li> 
                        <li><a href="/men"> Men</a></li> 
                        <li><a href="/women"> Wome</a></li> 
                        <li><a href="/kids"> Kids</a></li> 
                        <li><a href="/cart"> Cart</a></li> 
                    </ul>
                </nav> 
            </body>
        </html>
            `);
            return res.end();
    }
    if(req.url === '/women'){
        res.setHeader('Content-Type','text/html');
        res.write(`
            <html>
            <head><title>Women section</title> </head>
            <body>
            <nav>
            <ul>
            <li><a href="/"> Home</a></li> 
            <li><a href="/men"> Men</a></li> 
            <li><a href="/women"> Wome</a></li> 
            <li><a href="/kids"> Kids</a></li> 
            <li><a href="/cart"> Cart</a></li> 
            </ul>
            </nav> 
            <h1>This is women section</h1>
            </body>
        </html>
            `);
            return res.end();
    }
    else if(req.url === '/men'){
        res.setHeader('Content-Type','text/html');
        res.write(`
            <html>
            <head><title>Men section</title> </head>
            <body>
            <nav>
            <ul>
            <li><a href="/"> Home</a></li> 
            <li><a href="/men"> Men</a></li> 
            <li><a href="/women"> Wome</a></li> 
            <li><a href="/kids"> Kids</a></li> 
            <li><a href="/cart"> Cart</a></li> 
            </ul>
            </nav> 
            <h1>This is Men section </h1>
            </body>
        </html>
            `);
            return res.end();
    }
    else if(req.url === '/kids'){
        res.setHeader('Content-Type','text/html');
        res.write(`
            <html>
            <head><title>Kids section</title> </head>
            <body>
            <nav>
            <ul>
            <li><a href="/"> Home</a></li> 
            <li><a href="/men"> Men</a></li> 
            <li><a href="/women"> Wome</a></li> 
            <li><a href="/kids"> Kids</a></li> 
            <li><a href="/cart"> Cart</a></li> 
            </ul>
            </nav> 
            <h1>This is Kids section </h1>
            </body>
        </html>
            `);
            return res.end();
    }
 
        res.setHeader('Content-Type','text/html');
        res.write(`
            <html>
            <head><title>Cart section</title> </head>
            <body>
            <nav>
            <ul>
            <li><a href="/"> Home</a></li> 
            <li><a href="/men"> Men</a></li> 
            <li><a href="/women"> Wome</a></li> 
            <li><a href="/kids"> Kids</a></li> 
            <li><a href="/cart"> Cart</a></li> 
            </ul>
            </nav> 
            <h1>This is cart section </h1>
            </body>
        </html>
            `);
             res.end();
   

 
})
const PORT = 3000;
createPracticeServer.listen(PORT, () => {
    console.log(`Server runnig at http://localhost:${PORT}`)
})  