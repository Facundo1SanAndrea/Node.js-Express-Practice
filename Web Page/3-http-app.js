const express = require('express');
const path = require('path');
const app = express();

// setup static and middleware
app.use(express.static('./navbar-app'))

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
})

app.all('*', (request, response) => {
    response.status(404).send('Not Found');
})

app.listen(5000, () => { 
    console.log("server listeining on port 5000")
})
