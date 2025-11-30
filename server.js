const express = require('express');
const path = require('path');
const app = require('./src/app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📚 Perpustakaan Digital - Mini Project`);
});
