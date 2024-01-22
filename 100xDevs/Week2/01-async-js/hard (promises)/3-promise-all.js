/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise(function(resolve){
    setTimeout(resolve,t*1000)
    })
}

function wait2(t) {
    return new Promise(function(resolve){
    setTimeout(resolve,t*1000)
    })
}

function wait3(t) {
    return new Promise(function(resolve){
    setTimeout(resolve,t*1000)
    })
}

async function calculateTime(t1, t2, t3) {
    let d1 = new Date
    p1 = wait1(t1)
    p2 = wait1(t2)
    p3 = wait1(t3)

    p = [p1,p2,p3]

    await Promise.all(p)
    return Date.now() - d1 
    
}

module.exports = calculateTime;
