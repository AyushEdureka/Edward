const express = require('express')
const ConnectDB = require("./config/db");
const userRoutes = require('./routes/userRoutes')
require('dotenv').config()


const app = express()

app.use(express.json())
ConnectDB()
app.use('/api/user' , userRoutes)

app.listen(5000,()=>console.log('server is ruuning'))




