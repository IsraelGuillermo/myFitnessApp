const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Declaring schema for database
const workoutSchema = new Schema({
  day: { type: Date, default: Date.now },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: 'Enter Type of Workout'
      },
      name: {
        type: String,
        trim: true,
        required: 'Enter Workout Name'
      },
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number,
      distance: Number
    }
  ]
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
