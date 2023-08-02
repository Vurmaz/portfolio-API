const express = require('express')
const app = express()

require('dotenv').config()
require("express-async-errors")
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const helmet = require("helmet")
const cors = require("cors")
const xss = require("xss-clean")
const rateLimiter = require("express-rate-limit")

app.use(
  cors({
    origin: "http://sadikvurmaz.com",
    credentials: true,
  })
)

app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 600,
  })
)
app.use(helmet())
app.use(xss())

const skillRouter = require('./routes/skills')
const projectRouter = require('./routes/projects')
const contactRouter = require('./routes/contact')

app.get('/', (req, res) => {
  res.send('home')
})

app.use('/skill', skillRouter)
app.use('/project', projectRouter)
app.use('/contact', contactRouter)

const errorHandlerMiddleware = require("./middlewares/error-handlers")
const notFound = require("./middlewares/not-found")

app.use(notFound)
app.use(errorHandlerMiddleware)

const connectDB = require('./db/connect')

const port = process.env.PORT || 5000

const start = async() => {
  try{
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log('SERVER IS LİSTENİNG')      
    })
  }
  catch(err){
    console.log(err)
  }
}

start()