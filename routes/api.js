const express = require('express');
const router = express.Router();
const Workout = require('../models/workout');

router.get('/api/workouts', (req, res) => {
  db.find({}, (error, result) => {
    if (error) {
      throw error;
    }
    res.send(result);
  });
});
