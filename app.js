const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const queries = require('./queries')
const cors = require('cors')
const port = process.env.PORT || 3000
const listener = () => console.log(`Listening to port ${port}!`)

app.disable('x-powered-by')
app.use(bodyParser.json())
app.use(cors())

//GET ROUTES
app.get('/authors', (req, res) => {
  queries.listAllAuthors().then(authors => res.json({authors}))
})

app.get('/books', (req, res) =>{
  queries.listAllBooks().then(books => res.json({books}))
})

app.get('/booksAuthors', (req, res) => {
  queries.listAllBooksAndAuthors().then(booksAuthors => res.json({booksAuthors}))
})

//CREATE ROUTES
app.post('/authors', (req, res) => {
  console.log(req.body)
  queries.addAuthor(req.body).then(status => res.json({status}))
})

//DELETE ROUTES
app.delete('/deleteAuthor/:id', (req, res) => {
  queries.deleteAuthorById(req.params.id).then(status => res.json({status}))
})


app.get('/ping', (req,res) => {
  res.send('PONG!')
})

app.use((err,req,res,next)=>{
  res.status(err.status || 500).json({error:err})
})
app.use((req,res,next)=>{
  res.status(404).json({error: {message: 'Not Found!'}})
})
app.listen(port,listener)