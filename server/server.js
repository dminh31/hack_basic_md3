const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./routes/routesTodo')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use("/", router)

app.listen(port = 8080, () => {
    console.log(`Server is running on port ${port}`)
})