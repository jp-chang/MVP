const express = require('express');
const bodyParser = require('body-parser');
const Score = require('../DB/index.js')
require('dotenv').config();

const app = express();
const { PORT } = process.env;

app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));

// get all scores
app.get('/leaderboard', (req, res) => {
  const { level } = req.query
  Score.find({ level: level })
    .sort({ score: -1 })
    .limit(10)
    .exec()
    .then(data => res.send(data))
    .catch(err => res.status(404).send('No data found'))
})

// add a score
app.post('/leaderboard', (req, res) => {
  Score.create(req.body)
    .then(data => res.send(data))
    .catch(err => res.status(400).send('Faild'))
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});