const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

// Routes
router.get('/', indexController.getHome);
router.get('/books', indexController.getBooks);
router.get('/contact', indexController.getContact);
router.post('/contact', indexController.postContact);

module.exports = router;
