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

// Index Controller
const indexController = {
  // Home Page
  getHome: (req, res) => {
    res.render('index');
  },

  // Books Page
  getBooks: (req, res) => {
    const data = readData();
    const sortedBooks = helpers.sortByYear(data.books);
    const stats = helpers.getStats(sortedBooks);
    
    res.render('books', { 
      books: sortedBooks,
      stats 
    });
  },

  // Contact Page (GET)
  getContact: (req, res) => {
    res.render('contact');
  },

  // Contact Page (POST)
  postContact: (req, res) => {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.render('contact', { error: 'Semua field harus diisi!' });
    }
    
    const data = readData();
    data.messages.push({ 
      name, 
      email, 
      message, 
      date: new Date().toISOString() 
    });
    writeData(data);
    
    res.render('contact', { success: 'Pesan berhasil dikirim!' });
  }
};

module.exports = indexController;
