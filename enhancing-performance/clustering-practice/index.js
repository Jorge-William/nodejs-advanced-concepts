process.env.UV_THREADPOOL_SIZE = 1;

const cluster = require('cluster');
const crypto = require('crypto')
// Is the file being executed in the master mode?
if (cluster.isMaster) {
    // Cause index.js to be executed *again* but in child mode
    cluster.fork();
    cluster.fork();

} else {
    // Im a child, im doing act like a server and do nothing else
    const express = require('express');
    const app = express();

    const start = Date.now();

    app.get('/', (req, res) => {
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
            // console.log('job: crypto: ', Date.now() - start);
            res.send('Work finished!!');
        })
    })

    app.get('/fast-route', (req, res) => {
        res.send('Fastest route loaded!!!!')
    })

    app.listen(3000, () => {
        console.log('Server running on port 3000!!!');
    })
}