const express = require('express')
const morgan = require('morgan')
const { PrismaClient } = require('@prisma/client')

//server
const app = express()

const booksRouter = require('./books/router')

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
	console.log('Server is listening..')
})
