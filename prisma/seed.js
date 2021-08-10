const { PrismaClient } = require('@prisma/client')
const dbClient = new PrismaClient()
const books = require('./books')

async function seed() {
	// books.map(book => {
	// 	dbClient.book.create
	// })
	await dbClient.book.createMany({ data: books })
}

seed()
	.catch(e => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await dbClient.$disconnect()
	})

// async function seed() {
// 	const firstBook = await dbClient.book.create({
// 		data: {
// 			title: 'Sunny Day',
// 			author: 'John Doe',
// 			type: 'fiction',
// 			topic: 'novel',
// 		},
// 	})

// 	const secondBook = await dbClient.book.create({
// 		data: {
// 			title: 'Book 1',
// 			author: 'Jane Doe',
// 			type: 'non-fiction',
// 			topic: 'thriller',
// 		},
// 	})

// 	// for (const book of books) {
// 	// 	const theBook = await dbClient.book.create({
// 	// 		data: book,
// 	// 	})
// 	// 	console.log({ theBook })
// 	// }

// 	console.log({ firstBook, secondBook })
// }

// seed()
// 	.catch(e => {
// 		console.error(e)
// 		process.exit(1)
// 	})
// 	.finally(async () => {
// 		await dbClient.$disconnect()
// 	})

// module.exports = seed
