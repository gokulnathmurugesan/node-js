const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'lists',
  password: 'gokul9944',
  port: 5432,
})
const getproducts = (request, response) => {
  pool.query('SELECT * FROM products ORDER BY name ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const createproducts = (request, response) => {
  const { name,address } = request.body

  pool.query('INSERT INTO products (name,address)', [name,address], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`products added with name: ${result.insertname}`)
  })
}

/*const getaddress = (request, response) => {
  pool.query('SELECT * FROM questions ORDER BY name ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}*/

/*const all=(request,response)=>{ // method name
const connect = (request,response) => {
   pool.query('SELECT name , address , answers FROM lists' , (error,results) => {
     if(error) {
       throw error
       }
       response.status(200).json(results.rows)
     })
}*/

module.exports = {
  getproducts,
  createproducts


}
