let users = [{
    name: "john",
    kidneys: [{
        healthy: false
    },{
        healthy: true
    }]
}]

const express = require("express")

const PORT = 3000
const app = express()

app.listen(PORT)
app.use(express.json())

app.get('/',(req,res)=>{
    Kidneys = users[0].kidneys.length
    let HealthyCount = 0
    for (let i = 0; i < Kidneys; i++){
        if(users[0].kidneys[i].healthy) 
            HealthyCount++
    }
    UnhealthyCount = Kidneys - HealthyCount
    
    res.json({
        Kidneys,
        HealthyCount,
        UnhealthyCount
    })
})

app.post('/',(req,res)=>{
    const newKidney = req.body.isHealthy
    users[0].kidneys.push({
        healthy: newKidney
    })
    res.json({
        msg: "Done!"
    })
})

app.delete('/', (req,res) =>{
    let newKidneys = []
    for (let i = 0; i < users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy) 
            newKidneys.push({
                healthy: true
            })
    }
    users[0].kidneys = newKidneys
    res.json()
})

app.put('/', (req,res) =>{
    for (let i = 0; i < users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true 
    }
    res.json()
})

