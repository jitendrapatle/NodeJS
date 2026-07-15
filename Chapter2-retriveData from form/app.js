const http = require('http')
const httpReq = require('./httpreqFn')

const server = http.createServer(httpReq);

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`My server is rinning on ${PORT}`)
})