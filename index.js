const express = require('express')
const app = express()
// const port = process.env.PORT || 3000;
const port = 3020

const path = require('path')
const cors = require('cors')

const router = require('./config/routes')
const configureDB = require('./config/database')
configureDB()

app.use(cors())
app.use(express.json())

// app.use(express.static(path.join(__dirname,"client/build"))) 
// app.get("*",(req,res) => { 
//     res.sendFile(path.join(__dirname + "/client/build/index.html")) 
// }) 

app.use('/', router)

app.listen(port, () => {
    console.log('listening to the port,',port)
})