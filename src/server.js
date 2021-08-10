const express = require('express')
const morgan = require('morgan')

//server
const app = express()

const booksRouter = require('../src/resources/books/router')

//Middreware
app.use(morgan('dev'))
app.use(express.json())

//Routes
app.use('/books', booksRouter)

app.get('*', (req, res) => {
	res.status(404).json({ msg: 'No route is matching your request..' })
})

//connect the server to the port
app.listen(4000, () => {
	console.log('The server is connected!')
})
