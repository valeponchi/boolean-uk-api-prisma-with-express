const booksRouter = require('express').Router

const {
	getAllBooks,
	getOneBook,
	createOneBook,
	deleteOne,
	getBooksByType,
	getAuthor,
	updateABook,
} = require('./controller')

booksRouter.get('/', getAllBooks)
booksRouter.get('/:id', getOneBook)

booksRouter.post('/', createOneBook)

booksRouter.delete('/:id', deleteOne)

booksRouter.get('/type/:type', getBooksByType)

booksRouter.get('/author/:name', getAuthor)

module.exports = booksRouter
