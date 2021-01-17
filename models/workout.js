const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: Date,
  execises: [
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

      weight: Number,
      sets: Number,
      reps: Number,
      distance: Number,
      duration: Number
    }
  ]
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
