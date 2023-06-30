/**
 * Making the event looping busy
 */

const express = require('express');

const app = express();

function doWork(timeOfWork) {
    const start = Date.now();

    while (Date.now() - start < timeOfWork) { }
}

app.get('', (req, res) => {
    doWork(5000)
    res.send('Hello Wold!')
})

app.listen(3000, () => {
    console.log('Server running on port 3000!!!')
})