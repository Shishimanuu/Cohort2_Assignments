const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

app.get('/files',(req,res)=>{
  fs.readdir('./files','utf8',(err,files)=>{
    if(err){
      res.send('Unable to read directory').status(500)
    }
    else{
      res.send(files)
    }
  })
})

app.get('/file/:filename',(req,res)=>{
 const fileName = req.params.filename
 fs.readFile(path.join(__dirname,"./files/",fileName),'utf8',(err,data)=>{
    if(err){
        res.status(404).send("File not found")
    }
    else{
        res.send(data)
    }
 })
})

app.use((req,res)=>{
    res.status(404).send('Route not found');
})

module.exports = app;