const fs = require('fs')

fs.readFile('1-file-cleaner.md','utf-8',(err,data)=>{
    console.log(data)
    let n = data.length
    let newData = []
    consecSpace = false
    for(let i = 0;i<n;i++){
        if (data[i]==' '){
            if (!consecSpace){
                consecSpace = true
                newData.push(data[i])
            }
        }
        else{
            consecSpace = false
            newData.push(data[i])
        }
    }
    fs.writeFile('1-file-cleaner.md',newData.join(''),(err)=>{
        if (err)
            console.log(err);
          else {
            console.log("Spaces removed successfully\n");
            console.log("The written has the following contents:");
            console.log(fs.readFileSync("1-file-cleaner.md", "utf8"));
          }
    })

})