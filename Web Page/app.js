const express = require('express')
const app = express()
let { people } = require('./data')


// static assets
app.use(express.static('./methods-public'))

// parse form data
app.use(express.urlencoded({ extended: false }))
//parse json
app.use(express.json())

app.get('/api/people', (request, response) => {
    response.status(200).json({success:true,data:people})
})

app.post('/api/people', (request, response) => {
    const { name } = request.body
    if (!name){
        return response.status(401).json({success:false,msg:'please proide name value'})
    }
    response.status(201).json({})
})


app.post('/api/postman/people', (request, response) => {
    const {name} = request.body
    if (!name){
        return response.status(400).json({success:false,msg:'please proide name value'})
    }
    response.status(201).json({})
})

app.post('/login', (request, response) => {
    const { name } = request.body
    if (name) {
        return response.status(200).send(`Welcome ${name}`)
    }
    response.status(401).send('Please provides crednecials')
})


app.put('/api/people/:id', (request, response) => {
    const {id} = request.params
    const {name} = request.body

    const person = people.find((person) => person.id === Number(id))

    if (!person) {
        return response.status(404).json({ success: false, msg: `no person with id ${id}`})
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)){
          person.name = name  
        }
        return person
    })
    response.status(200).json({success:true, data: newPeople})
})


app.delete('/api/people/:id', (request, response) => {
    const person = person.find((person) => person.id === Number(request.params.id))
    if (!person) {
        return response.status(404).json({ succes: false, msg: `no person with id ${request.params.id}`})
    }
    const NewPeople = people.filter((person) => person.id !== Number(request.params.id))
    return response.status(200).json({success: true,data: newPeople})
})

app.listen(5000, () => {
    console.log('Server listeing on port 5000...')
})