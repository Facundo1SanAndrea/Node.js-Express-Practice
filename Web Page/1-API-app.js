const express = require('express')
const app = express()
const { products } = require('./data')


app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})


app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image }
  })

  res.json(newProducts)
})


app.get('/api/products/:productID', (req, res) => {
    // console.log(req);
    // console.log(req.params);
    const {productID} = req.params

    const singleProduct = products.find(
        (products) => products.id === Number(productID)
    )
    if (!singleProduct){
        return res.status(404).send('Product does not exist')
    }
    res.json(singleProduct)
  })

app.get('/api/v1/query', (request, response) => {
  //console.log(request.query)
  const {search,limit} = request.query
  let sortedProducts = [...products];
  
  if(search){
    sortedProducts = sortedProducts.filter((products) => {
      return products.name.startsWith(search)
    })
  }
  if (limit){
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }
  response.status(200).json(sortedProducts)
})


app.listen(5000, () => {
    console.log("Server is listeing on port 5000")
})