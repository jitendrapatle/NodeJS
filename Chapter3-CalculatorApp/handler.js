const {sumRequestHandler} = require('./sum')

const mainHandler = (req,res)=>{
    if(req.url === '/'){
        res.setHeader('Content-Type','text/html');
        res.write(`
            <h1>Welcome to calculator</h1>
            <a href="/calculator">Jump to calculator</a>
            `)
            return res.end()
    }
    else if(req.url === '/calculator'){
        res.setHeader('Content-Type','text/html');
        res.write(`
            <h1>Calculate the sum of two numbers</h1>
            <form action="/sum-result" method="POST">
            <input name="num1" type="number" value="4">
            <input name="num2" type="number" value="5">
            <input type="submit" value="Sum">
            </form>
            <br>
            <a href="/">Return to Home</a>
            `)
            return res.end()
    }
    else if(req.url.toLowerCase() === '/sum-result' && req.method === 'POST'){
         return sumRequestHandler(req,res);
         
    }

    res.setHeader('Content-Type','text/html');
    res.write(`
        <h1>Page not found</h1>
            <a href="/">Return to Home</a>
        `)
    return res.end()

}

module.exports = mainHandler;