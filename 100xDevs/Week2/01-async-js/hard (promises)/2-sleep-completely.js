/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
   let d0 = Date.now()
   return new Promise((resolve)=>{
    while ((Date.now()-d0)<milliseconds)
    resolve()
   })
}
module.exports = sleep;
