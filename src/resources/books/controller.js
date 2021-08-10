const { PrismaClientKnownRequestError } = require('@prisma/client/runtime')
// const dbClient = require('../../utils/dbClient')

const { book } = require('../../utils/dbClient')

function getOneBook(req, res) {
	const id = Number(req.params.id)
	book
		.findUnique({
			where: {
				id: id,
			},
		})
		.then(foundBook => {
			res.json({ foundBook })
		})
}

async function getAllBooks(req, res) {
	// in books is the result of the promise
	const books = await book.findMany()
	res.json({ data: books })
}

async function createOneBook(req, res) {
	const newBook = req.body

	try {
		const createdBook = await book.create({ data: newBook })
		res.json({ data: createdBook })
	} catch (error) {
		res.json({ error: error.message })
	}
}

function deleteOne(req, res) {
	const id = Number(req.params.id)
	book
		.delete({
			where: {
				id: id,
			},
		})
		.then(deletedItem => {
			res.json({ deletedItem })
		})
}

const getBooksByType = async (req, res) => {
	const type = req.params.type
	const topic = req.query.topic

	try {
		if (topics) {
			const byTopicBooks = await book.findMany({
				where: {
					type: type,
					topic: topic,
				},
			})
			res.json({ filtered_by_topic: byTopicBooks })
		} else {
			const byTypeBooks = await book.findMany({
				where: {
					type: type,
				},
			})
			res.json({ filtered_by_type: byTypeBooks })
		}
	} catch (error) {
		res.json({ error: error.message })
	}
}

async function getBooksByAuthor(req, res) {
	const author = req.params.author

	try {
		const books = await book.findMany({
			where: {
				author: author,
			},
			orderBy: {
				publicationDate: 'desc',
			},
		})
		res.json({ filtered: books })
	} catch (error) {
		res.json({ error: error.message })
	}
}

// Update a book
async function updateABook(req, res) {
	const undatedKeys = req.body
	const bookId = Number(req.params.id)

	try {
		const foundBook = book.findUnique({
			where: {
				id: bookId,
			},
		})
		if (foundBook) {
			const updatedBook = await book.update({
				where: {
					id: bookId,
				},
				data: {
					...foundBook,
					...undatedKeys,
				},
			})
			res.json({ updated: updatedBook })
			// .then(updated => {
			// 	res.json({ updated })
			// })
		} else {
			res.json({ msg: `A book with id n.${bookId} doesn't exist` })
		}
	} catch (error) {
		res.json(error => {
			error.message
		})
	}
}

module.exports = {
	getAllBooks,
	getOneBook,
	createOneBook,
	deleteOne,
	getBooksByType,
	getBooksByAuthor,
	updateABook,
}
