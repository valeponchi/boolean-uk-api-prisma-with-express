const booksRouter = require('express').Router

const { createOneBook } = require('./controller')

booksRouter.get('/', createOneBook)

module.exports = booksRouter
