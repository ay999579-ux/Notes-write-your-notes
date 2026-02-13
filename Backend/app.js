const express = require('express')
const mongodb = require('./config/DB.connection')
const cors = require('cors')


mongodb()
const app = express()
app.use(cors())
app.use(express.json())//to access formData
app.use(express.urlencoded({extended: true}))

// app.get('/',function(req,res){
//     try{
//         res.send('server started')
//     }
//     catch{
//         res.send(error)
//         console.log(error)
//     }
// })


app.use('/',require('./router/first.router'))

app.listen(3000,()=>{
    console.log(`🚀Server started at - http://localhost:3000`)
})