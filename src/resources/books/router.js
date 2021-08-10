// const express = require("express")
// const booksRouter = express.Router()
// OR:
const booksRouter = require('express').Router()

const {
	getAllBooks,
	getOneBook,
	createOneBook,
	deleteOne,
	getBooksByType,
	getBooksByAuthor,
	updateABook,
} = require('./controller')

booksRouter.get('/', getAllBooks)
booksRouter.get('/:id', getOneBook)

booksRouter.post('/', createOneBook)

booksRouter.delete('/:id', deleteOne)

booksRouter.get('/type/:type', getBooksByType)

booksRouter.get('/author/:name', getBooksByAuthor)

booksRouter.patch('/:id', updateABook)

module.exports = booksRouter
