const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Data path helper
const dataPath = path.join(__dirname, '../data/data.json');

// Make dataPath available for controllers
app.locals.dataPath = dataPath;

// Routes
const indexRoutes = require('./routes/index');
const apiRoutes = require('./routes/apiRoutes');

app.use('/', indexRoutes);
app.use('/api', apiRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).render('404');
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    error: err.message || 'Server Error'
  });
});

module.exports = app;
