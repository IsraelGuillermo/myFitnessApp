const express = require('express');
const router = express.Router();
const Workout = require('../models/workout');
const mongoose = require('mongoose');

// This route gets information for range to generate the dashboard
router.get('/api/workouts/range', (req, res) => {
  Workout.find({}, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});
// Gets all information for workouts to display information on the main page
router.get('/api/workouts', (req, res) => {
  Workout.aggregate([
    { $addFields: { totalDuration: { $sum: '$exercises.duration' } } }
  ])
    .then((Workout) => {
      res.json(Workout);
    })
    .catch((err) => {
      res.json(err);
    });
});
// allows user to post/create a new workout
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
// allows user to add an exercise to current workout day
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

// exports router
module.exports = router;
