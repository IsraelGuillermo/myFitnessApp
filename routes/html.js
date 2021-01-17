const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/exercise', (_req, res) => {
  res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

router.get('/stats', (_req, res) => {
  res.sendFile(path.join(__dirname, '../public/stats.html'));
});

module.exports = router;
