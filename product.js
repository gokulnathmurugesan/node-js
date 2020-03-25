const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./product_queries')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})
app.get('/products', db.getproducts)

app.post('/products', db.createproducts)




app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
