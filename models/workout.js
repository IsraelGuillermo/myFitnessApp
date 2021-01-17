const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
