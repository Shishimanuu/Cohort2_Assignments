function helu(){
    end = Date.now()
    console.log("helu!")
    console.log(end-start)
}
start = Date.now()
setTimeout(helu,1000)
