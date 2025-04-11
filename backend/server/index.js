const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Score = require('./models/Score');

const app = express();
const PORT = 5000;
//code above is used to set up the backend server and to connect MongoDB via, the specific port and connecting to frontend with cors
// Middleware
app.use(cors());
app.use(express.json());

// this code allows the database MongoDB to connect when node.js is used
mongoose.connect('mongodb://localhost:27017/quizDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));
// a message will appear saying either MongoDB has connected or there is an error
// this is used to make a routes for the sending data to the MongoDB itself and it will be send the Quiz score data
app.post('/api/quiz/results', async (req, res) => {
  const { score } = req.body;
  try {
    const newScore = new Score({ score });
    await newScore.save();
    res.status(201).json({ message: 'Score saved successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save score' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//message will appear if the score will saved and sent successfully or not