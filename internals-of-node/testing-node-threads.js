const crypto = require('crypto')
const start = Date.now()

/**
 *  Each call of pbkdf2 will be sent to one of node threads and as we know 
 *  the event looping have four threads available for all of your tasks and 
 *  in this case we have five tasks and the last one will be left to be atended 
 *  when one thread is available and this will take some time to happen.
 */
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('1: ', Date.now() - start)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('2: ', Date.now() - start)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('3: ', Date.now() - start)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('4: ', Date.now() - start)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('5: ', Date.now() - start)
})