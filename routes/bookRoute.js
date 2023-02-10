import express from 'express'
import { bookController } from '../controllers/bookController.js'

const router = express.Router()

router.get('/',  bookController.getAllBooks)
router.get('/:id', bookController.getBookById)
router.post('/', bookController.addBook)
router.patch('/:id', bookController.updateBook)
router.delete('/:id', bookController.deleteBook)


export { router as bookRoute }
