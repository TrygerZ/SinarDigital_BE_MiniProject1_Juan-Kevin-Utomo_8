// Validator middleware
const validator = {
  validateBook: (req, res, next) => {
    const { title, author, year } = req.body;
    
    if (!title || !author || !year) {
      return res.status(400).json({ error: 'Semua field harus diisi' });
    }
    
    if (typeof title !== 'string' || title.trim().length === 0) {
      return res.status(400).json({ error: 'Judul harus berupa teks' });
    }
    
    if (typeof author !== 'string' || author.trim().length === 0) {
      return res.status(400).json({ error: 'Penulis harus berupa teks' });
    }
    
    if (isNaN(year) || year < 1900 || year > new Date().getFullYear()) {
      return res.status(400).json({ error: 'Tahun tidak valid' });
    }
    
    next();
  }
};

module.exports = validator;
