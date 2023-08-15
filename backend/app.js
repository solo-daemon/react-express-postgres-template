const express = require('express')
const cors = require('cors')
const db = require('./queries')
const { serverPort } = require('./config')

const app = express()
app.use(cors({
    origin: '*' ,
}));

const port = serverPort ;

app.get('/', (request, response) => {
    response.json({ info: 'Hello world' })
})

app.listen(port)