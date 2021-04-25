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

// MIDDLEWARE 

const middleware = (req, res, next) => {
    console.log("1")
    next()
}


app.get('/about', middleware, (req, res) => {
    res.send(`Hello About From The Terminators`)

})

app.get('/contact', (req, res) => {
    res.send(`Hello Contact From The Terminators`)
})

app.get('/signin', (req, res) => {
    res.send(`This is the GateWay to Terminators`)
})

app.get('/signup', (req, res) => {
    res.send(`Join the Terminators Family`)
})

app.listen(PORT, () => {
    console.log(`Server is running at port number ${PORT}`)
})