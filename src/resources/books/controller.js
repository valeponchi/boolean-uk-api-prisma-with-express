function createOneBook(req, res) {
	const newBook = req.body

	req.dbClient.book.create({ data: newBook }).then(newBook => {
		res.json({ newBook })
	})
}

module.exports = { createOneBook }
