const fs = require('fs');
const path = require('path');
const helpers = require('../utils/helpers');

const dataPath = path.join(__dirname, '../data/data.json');

// Helper: Read data
const readData = () => {
  try {
    return JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  } catch {
    return { books: [], messages: [] };
  }
};

// Helper: Write data
const writeData = (data) => {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

// API Controller
const apiController = {
  // Add Book
  addBook: (req, res) => {
    try {
      const { title, author, year } = req.body;
      const data = readData();
      
      const newBook = {
        id: helpers.generateId(),
        title,
        author,
        year: parseInt(year),
        createdAt: new Date().toISOString()
      };
      
      data.books.push(newBook);
      writeData(data);
      
      res.status(201).json({
        success: true,
        message: 'Buku berhasil ditambahkan',
        data: newBook
      });
    } catch (error) {
      res.status(500).json({
        error: 'Gagal menambahkan buku'
      });
    }
  },

  // Get All Books
  getBooks: (req, res) => {
    try {
      const data = readData();
      res.json({
        success: true,
        data: data.books,
        total: data.books.length
      });
    } catch (error) {
      res.status(500).json({ error: 'Gagal mengambil data' });
    }
  },

  // Get Book By ID
  getBookById: (req, res) => {
    try {
      const { id } = req.params;
      const data = readData();
      const book = data.books.find(b => b.id === id);
      
      if (!book) {
        return res.status(404).json({ error: 'Buku tidak ditemukan' });
      }
      
      res.json({
        success: true,
        data: book
      });
    } catch (error) {
      res.status(500).json({ error: 'Gagal mengambil data' });
    }
  },

  // Update Book
  updateBook: (req, res) => {
    try {
      const { id } = req.params;
      const { title, author, year } = req.body;
      const data = readData();
      
      const bookIndex = data.books.findIndex(b => b.id === id);
      
      if (bookIndex === -1) {
        return res.status(404).json({ error: 'Buku tidak ditemukan' });
      }
      
      data.books[bookIndex] = {
        ...data.books[bookIndex],
        title,
        author,
        year: parseInt(year),
        updatedAt: new Date().toISOString()
      };
      
      writeData(data);
      
      res.json({
        success: true,
        message: 'Buku berhasil diperbarui',
        data: data.books[bookIndex]
      });
    } catch (error) {
      res.status(500).json({ error: 'Gagal memperbarui buku' });
    }
  },

  // Delete Book
  deleteBook: (req, res) => {
    try {
      const { id } = req.params;
      const data = readData();
      
      const bookIndex = data.books.findIndex(b => b.id === id);
      
      if (bookIndex === -1) {
        return res.status(404).json({ error: 'Buku tidak ditemukan' });
      }
      
      const deletedBook = data.books.splice(bookIndex, 1);
      writeData(data);
      
      res.json({
        success: true,
        message: 'Buku berhasil dihapus',
        data: deletedBook[0]
      });
    } catch (error) {
      res.status(500).json({ error: 'Gagal menghapus buku' });
    }
  }
};

module.exports = apiController;
