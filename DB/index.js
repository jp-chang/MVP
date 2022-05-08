const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/MVP', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to mongoDB!')
  ).catch(err => console.log('Connection failed'));

let score = mongoose.Schema({
  username: { type: String, default: 'Ghost' },
  level: String,
  score: Number
});

const Score = mongoose.model('Score', score);

module.exports = Score