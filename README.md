# 📚 Perpustakaan Digital - Mini Project Back End

Aplikasi web sederhana untuk mengelola koleksi buku menggunakan Express.js dengan struktur modular menggunakan express.Router().

## 📋 Requirement Terpenuhi

✅ **Tema Unik**: Perpustakaan Digital  
✅ **Routing**: 3+ route berbeda (Home, Books, Contact)  
✅ **Form Input**: Minimal 1 form (Contact form dengan email, nama, pesan)  
✅ **Struktur Folder**: Modularisasi dengan express.Router()  
✅ **Fungsi JavaScript**: Array methods (filter, sort, reduce), helper functions dengan arrow function  
✅ **Data Input → Tampil**: Form input disimpan & ditampilkan di halaman lain  

## 📁 Struktur Folder

```
Project BNCC/
├── src/
│   ├── config/
│   │   └── app.config.js           # Konfigurasi aplikasi
│   ├── routes/
│   │   ├── index.js                # Route halaman
│   │   └── apiRoutes.js            # Route API
│   ├── controllers/
│   │   ├── indexController.js      # Controller halaman
│   │   └── apiController.js        # Controller API
│   ├── middlewares/
│   │   ├── errorHandler.js         # Error handler
│   │   └── validator.js            # Validasi input
│   ├── utils/
│   │   └── helpers.js              # Helper functions
│   ├── views/                      # File EJS
│   ├── data/                       # Database JSON
│   └── app.js                      # Express setup
├── server.js                       # Entry point
├── package.json                    # Dependencies
├── .env.example                    # Template env
├── .gitignore
└── README.md
```

## ✨ Fitur Utama

### Routing (3+ routes)
- `GET /` - Home page dengan form input nama user
- `GET /books` - Daftar buku dengan statistik
- `GET /contact` - Form kontak
- `POST /contact` - Submit kontak

### Form Input
- **Contact Form**: Menerima nama, email, pesan
- Validasi input di server side
- Data tersimpan di JSON & ditampilkan

### API Endpoints
- `POST /api/books` - Tambah buku
- `GET /api/books` - Ambil semua buku
- `GET /api/books/:id` - Ambil buku by ID
- `PUT /api/books/:id` - Update buku
- `DELETE /api/books/:id` - Hapus buku

## 🛠️ Fitur JavaScript

- **Arrow Functions**: Di helper functions (`=>`)
- **Array Methods**:
  - `filter()` - Filter buku
  - `sort()` - Sorting buku by tahun
  - `map()` - Transform data
  - `reduce()` - Aggregasi data
- **Destructuring**: Parameter extraction
- **Try-Catch**: Error handling
- **localStorage**: Menyimpan nama user

## 🚀 Cara Menjalankan

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Server**
   ```bash
   npm start
   ```

3. **Akses Aplikasi**
   - Browser: `http://localhost:3000`

## 📝 Contoh API Usage

**Tambah Buku:**
```bash
curl -X POST http://localhost:3000/api/books \
  -H "Content-Type: application/json" \
  -d '{"title":"Clean Code","author":"Robert Martin","year":2008}'
```

**Ambil Semua Buku:**
```bash
curl http://localhost:3000/api/books
```

**Hapus Buku:**
```bash
curl -X DELETE http://localhost:3000/api/books/[ID]
```

## 💾 Data Structure

```json
{
  "books": [
    {
      "id": "book_1701330000000_abc123def",
      "title": "Judul Buku",
      "author": "Nama Penulis",
      "year": 2025,
      "createdAt": "2025-11-30T10:00:00.000Z"
    }
  ],
  "messages": [
    {
      "name": "Nama User",
      "email": "user@email.com",
      "message": "Isi pesan",
      "date": "2025-11-30T10:00:00.000Z"
    }
  ]
}
```

## 👨‍💻 Author

Juan Kevin Utomo - Kelompok  8

## 📄 License

MIT


