const dotenv = require("dotenv")
const mongoose = require("mongoose")
const express = require('express')
const app = express()

dotenv.config({path: './config.env'})

const PORT = process.env.PORT
require('./db/conn');

app.use(express.json())

// We link the router files to make our route easy
app.use(require('./router/auth'))


app.listen(PORT, () => {
    console.log(`Server is running at port number ${PORT}`)
})