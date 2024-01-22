const express = require("express")

const app = express()
PORT = 3000

app.use(express.json())

app.listen(PORT)

app.get('/', (req,res)=>{
    res.send("hue hue hue")
})