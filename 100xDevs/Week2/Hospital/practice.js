users = [{
    Name: "John",
    kidney: [{
        healthy: true
    },{
        healthy: false
    }]
}]

const express = require("express")
const app = express()

app.listen(3000,()=>{
    console.log("Hospital Open!")
})

app.use(express.json())

app.get('/',(req,res)=>{
    let k = users[0].kidney
    const count = k.length
    let healthyCount = 0

    for(let i = 0;i<count;i++){
        if (k[i].healthy){
            healthyCount++
        }
    }
    let UnhealthyCount = count - healthyCount
    res.json({
        count,
        healthyCount,
        UnhealthyCount
    })
})

app.post("/",(req,res)=>{
    let k = users[0].kidney
    let newKid = req.body.health
    k.push({healthy:newKid})
    res.send("Added given Kidney!")
})

app.put("/",(req,res)=>{
    const k = users[0].kidney
    for(let i = 0;i<k.length;i++){
        k[i].healthy = true
    }
    res.send("All Kidneys healthy now!")
})

app.delete('/',(req,res)=>{
    const k = users[0].kidney
    let newKid = []
    for(let i = 0;i<k.length;i++){
        if(k[i].healthy){
            newKid.push(k[i])
        }
    }
    users[0].kidney = newKid
    res.send("Removed unhealthy kidney!")
})