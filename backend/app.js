
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const apiRoutes = require('./src/routes/api')
const conn = require('./src/configs/db')
app.use(bodyParser.json())
require('dotenv/config')

const api = process.env.API_URL

const PORT = 6060

app.use('/api/v1', apiRoutes)

app.listen(PORT, () => {
    
    console.log(`App listen at port:` , PORT);
})