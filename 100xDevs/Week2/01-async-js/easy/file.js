const fs = require("fs")
let ans = 0

fs.readFile('1-counter.md','utf-8',(err,data)=>{
    console.log(data)
})

for(let i = 0;i<100000;i++){
    ans = ans*ans
}
console.log(ans)

fs.writeFile('4-write-to-file.md',"le likh dia",(err)=>{
    if (err)
        console.log(err);
      else {
        console.log("File written successfully\n");
        console.log("The written has the following contents:");
        console.log(fs.readFileSync("4-write-to-file.md", "utf8"));
      }
})