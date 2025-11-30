// Helper functions
const helpers = {
  // Generate ID
  generateId: () => `book_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
  
  // Filter books by year
  filterByYear: (books, year) => books.filter(b => b.year === parseInt(year)),
  
  // Sort books by year (descending)
  sortByYear: (books) => [...books].sort((a, b) => b.year - a.year),
  
  // Search books
  searchBooks: (books, query) => {
    const q = query.toLowerCase();
    return books.filter(b => 
      b.title.toLowerCase().includes(q) || 
      b.author.toLowerCase().includes(q)
    );
  },
  
  // Get book statistics
  getStats: (books) => ({
    total: books.length,
    avgYear: books.length > 0 ? Math.round(books.reduce((sum, b) => sum + b.year, 0) / books.length) : 0,
    newest: books.length > 0 ? Math.max(...books.map(b => b.year)) : 0
  })
};

module.exports = helpers;
