const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
  score: {
    type: Number,
    required: true
  },
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Score', scoreSchema);
//code above will look for a score and will be track when the score has been submitted to the database.