const express = require("express")
const app = express()

app.listen(3000,()=>{
  console.log("server online")
})

app.get('/',(req,res)=>{
  res.send("hi")
})