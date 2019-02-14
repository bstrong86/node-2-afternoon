require('dotenv').config()

const express = require('express')
const massive = require('massive')
const bodyParser= require('body-parser')
const ctrl = require('./product_controller.js')

const app = express()

app.use(bodyParser.json())

const {CONNECTION_STRING}= process.env

massive(CONNECTION_STRING).then((dbInstance) =>{
    app.set('db', dbInstance)
})

app.post('/api/products', ctrl.create)

app.get('/api/products', ctrl.getAll)

app.get('/api/products/:id', ctrl.getOne)


app.put('/api/products/:id', ctrl.update)

app.delete('/api/products/:id', ctrl.delete)


    








app.listen (3000, () => {console.log("3000 working")})

