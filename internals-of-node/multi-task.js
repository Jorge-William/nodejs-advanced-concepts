/**
 *  
 *  
 */


const https = require('https');
const crypto = require('crypto');
const fs = require('fs')

const start = Date.now();

function makeRequest() {
    https.request('https://www.itau.com.br', res => {
        res.on('data', () => { });
        res.on('end', () => {
            console.log(Date.now() - start)
        })
    }).end();
}

function doHash() {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        console.log('Hash:', Date.now() - start);
    })
}

makeRequest()

fs.readFile('multi-task.js', 'utf-8', () => {
    console.log('FS: ', Date.now() - start);
})

// doHash()
// doHash()
// doHash()
// doHash()
