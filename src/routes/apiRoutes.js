const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');
const validator = require('../middlewares/validator');

// API Routes
router.post('/books', validator.validateBook, apiController.addBook);
router.get('/books', apiController.getBooks);
router.get('/books/:id', apiController.getBookById);
router.put('/books/:id', validator.validateBook, apiController.updateBook);
router.delete('/books/:id', apiController.deleteBook);

module.exports = router;
