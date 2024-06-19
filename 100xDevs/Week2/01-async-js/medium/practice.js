const fs = require("fs")

fs.readFile('./1-file-cleaner.md','utf8',(err,data)=>{
    console.log(data)
    l = data.length
    isConsec = false
    let res = []

    for(let i = 0;i<l;i++){
        c = data[i]
        if (c==' '){
            if (!isConsec){
                res.push(c)
                isConsec = true
            }
        }
        else{
            isConsec = false
            res.push(c)
        }
    }
    fs.writeFile('./1-file-cleaner.md',res.join(''),(err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("Successfully cleaned File! Here are the updated contents:")
            console.log(fs.readFileSync('./1-file-cleaner.md','utf8'))
        }
    })
})