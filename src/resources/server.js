const express = require('express')
const morgan = require('morgan')
const { PrismaClient } = require('@prisma/client')

//how app talks to the Database
const dbClient = new PrismaClient()

//server
const app = express()

// const booksRouter = require

//Middreware
app.use(morgan('dev'))
app.use(express.json())

app.use((req, res) => {
	req.dbClient = dbClient
	next()
})

//Routes
// app.use("/books", usersRouter)

app.get('*', (req, res) => {
	res.json({ msg: 'No route is matching your request..' })
})

//connect the server to the port
app.listen(4000, () => {
	console.log('Server is listening..')
})
