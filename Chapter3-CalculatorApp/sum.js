const sumRequestHandler = (req, res) => {
    const body = [];
    req.on('data', (chunk) => {
        console.log(chunk)
        body.push(chunk)
        console.log(body)
    });
    req.on('end', () => {
        const bodyStr = Buffer.concat(body).toString();
        const params = new URLSearchParams(bodyStr);
        const bodyObj = Object.fromEntries(params)
        const result = Number(bodyObj.num1) + Number(bodyObj.num2)
        console.log(result);
        res.setHeader('Content-Type', 'text/html');
        res.write(`

                <html>
            <head><title>User section</title> </head>
            <body> 
            <h1>The sum result is ${result} </h1>
            
             

            </body>
        </html>
                `);
        return res.end();


    });
    

}

exports.sumRequestHandler = sumRequestHandler;