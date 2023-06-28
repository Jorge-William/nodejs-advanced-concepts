/**
 *  We can see in this example that some operations are called by our code(JS) and through the libuv are 
 *  delegated to OS because some low level works are taken by it and libuv wait for result
 *  (positive or negative) and return to out code(js)
 * */

const https = require('https');

const start = Date.now()

function makeRequest() {
    https.request('https://www.itau.com.br', res => {
        res.on('data', () => { });
        res.on('end', () => {
            console.log(Date.now() - start)
        })
    }).end();
}

makeRequest()
makeRequest()
makeRequest()
makeRequest()
makeRequest()
makeRequest()
makeRequest()