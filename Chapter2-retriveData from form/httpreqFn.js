
const fs = require('fs')

function httprequest(req, res) { 
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
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
                        <li><a href="/user"> User</a></li> 
                    </ul>
                </nav> 
            </body>
        </html>
            `);
        return res.end();
    }
    else if (req.url === '/women') {
        res.setHeader('Content-Type', 'text/html');
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
            <li><a href="/user"> User</a></li> 
            </ul>
            </nav> 
            <h1>This is women section</h1>
            </body>
        </html>
            `);
        return res.end();
    }
    else if (req.url === '/men') {
        res.setHeader('Content-Type', 'text/html');
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
            <li><a href="/user"> User</a></li> 
            </ul>
            </nav> 
            <h1>This is Men section </h1>
            </body>
        </html>
            `);
        return res.end();
    }
    else if (req.url === '/kids') {
        res.setHeader('Content-Type', 'text/html');
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
            <li><a href="/user"> User</a></li> 
            </ul>
            </nav> 
            <h1>This is Kids section </h1>
            </body>
        </html>
            `);
        return res.end();
    }
    else if (req.url === '/user') {
        res.setHeader('Content-Type', 'text/html'); 
        res.write(`
            <html>
            <head><title>User section</title> </head>
            <body>
            <nav>
            <ul>
                <li><a href="/"> Home</a></li> 
                <li><a href="/men"> Men</a></li> 
                <li><a href="/women"> Wome</a></li> 
                <li><a href="/kids"> Kids</a></li> 
                <li><a href="/cart"> Cart</a></li> 
                <li><a href="/user"> User</a></li> 
            </ul>
            </nav> 
            <h1>This is User section </h1>
            
            <form action="/user-submitted" method="POST">
            <label for="fname">First name:</label><br>
            <input type="text" id="fname" name="fname" value="John"><br>
            <label for="lname">Last name:</label><br>
            <input type="text" id="lname" name="lname" value="Doe"><br><br>
            <input type="submit" value="Submit">
            </form> 

            </body>
        </html>
            `);
        return res.end();
    }
    else if (req.url === '/user-submitted' && req.method == 'POST') {
        const body = [] ;
        req.on('data', (chunck)=>{
            console.log(chunck)
            body.push(chunck);

         });
         req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString()
            console.log(parsedBody)
            const param = new URLSearchParams(parsedBody)
            const actualData = Object.fromEntries(param)
            console.log(actualData)
            fs.writeFileSync('userData.txt', JSON.stringify(actualData))
         })
        res.statusCode = 302;
        res.setHeader('Location','/')
        
    }
    res.write(`
            <h1>My NODE APP</h1>
        `)
    res.end();
}
 
module.exports = httprequest;