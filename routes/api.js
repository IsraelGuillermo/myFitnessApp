const express = require('express');
const router = express.Router();
const Workout = require('../models/workout');
const mongoose = require('mongoose');

router.get('/api/workouts', (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post('/api/workouts', ({ body }, res) => {
  Workout.create(body)
    .then((newWorkout) => {
      console.log(newWorkout);
      res.status(200).json(newWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put('/api/workouts/:id', (req, res) => {
  let id = req.params.id;

  Workout.findOneAndUpdate(
    { _id: mongoose.Types.ObjectId(id) },
    { $push: { exercises: req.body } },
    { new: true }
  )
    .then((updatedWorkout) => {
      res.json(updatedWorkout);

      console.log(updatedWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
