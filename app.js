const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()


//App
const app = express()

//Database
mongoose.connect(process.env.DATABASE_CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log("Connected to database")
})


//Middlewares
app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))


//Routes
app.get('/', (req, res) => {
    res.status(200).send("Hello world")
})


//Listen to server
const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Listening to server on ${port}`)
})