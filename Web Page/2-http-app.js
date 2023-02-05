const express = require("express");
const app = express()

app.get('/', (request, response) => {
    console.log('User hit the result')
    response.status(200).send('Home Page');
})

app.get('/about', (request, response) => {
    response.status(200).send('About page');
})

app.all('*', (request, response) => {
    response.status(404).send('<h1>Not Found</h1>')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000../')
})

/*app.get
app.post
app.put
app.delete
app.all
app.use
app.listen
*/
