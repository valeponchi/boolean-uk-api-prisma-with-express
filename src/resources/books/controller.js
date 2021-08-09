const { PrismaClientKnownRequestError } = require('@prisma/client/runtime')
const dbClient = require('../../utils/dbClient')
//HO IMPORTATO QUESTO DB PER MODIFICARE POI COSA QUI?

function getAllBooks(req, res) {
	dbClient.book.findMany().then(books => {
		res.json({ books })
	})
}

function getOneBook(req, res) {
	const id = Number(req.params.id)
	dbClient.book
		.findUnique({
			where: {
				id: id,
			},
		})
		.then(foundBook => {
			res.json({ foundBook })
		})
}

async function createABook(req, res) {
	const newBook = req.body

	try {
		const createdBook = await dbClient.book.create({ data: newBook })
		res.json({ data: createdBook })
	} catch (error) {
		res.json({ error: error.message })
	}
}

function deleteOne(req, res) {
	const id = Number(req.params.id)
	dbClient.book
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
	const types = req.params.type
	const topics = req.query.topic

	console.log(types)
	try {
		if (topics) {
			const books = await dbClient.book.findMany({
				where: {
					type: types,
					topic: topics,
				},
			})
			res.json({ filteredBooksByTopic: books })
		} else {
			const books = await dbClient.book.findMany({
				where: {
					type: types,
				},
			})
			res.json({ filteredBooksByType: books })
		}
	} catch (error) {
		res.json({ error: error.message })
	}
}

async function getBookByAuthor(req, res) {
	const author = req.params.author

	try {
		const books = await dbClient.book.findMany({
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
		const foundBook = dbClient.book.findUnique({
			where: {
				id: bookId,
			},
		})
		if (foundBook) {
			const updatedBook = await dbClient.book.update({
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
	getBookByAuthor,
	updateABook,
}
