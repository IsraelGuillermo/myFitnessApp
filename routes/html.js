const express = require('express');
const router = express.Router();
const path = require('path');

// directs to main page
router.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// directs to page for exercise to be added
router.get('/exercise', (_req, res) => {
  res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

// directs to the stats page
router.get('/stats', (_req, res) => {
  res.sendFile(path.join(__dirname, '../public/stats.html'));
});

module.exports = router;
