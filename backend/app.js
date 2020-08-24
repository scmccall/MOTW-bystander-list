const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const database = require('./database');
const bodyParser = require('body-parser');

// Connect mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(database.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database connected")
  },
  error => {
    console.log("Error connecting to database: " + error)
  }
);

const bystanderAPI = require("../backend/routes/bystander.route");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended : false
}));
app.use(cors());

// API
app.use('/api', bystanderAPI);


// Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(`Connected to port ${ port }`);
});

// 404
app.use((req, res, next) => {
  next(createError(404));
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.message);
  if (!err.statusCode) {
    err.statusCode = 500;
  };
  res.status(err.statusCode).send(err.message);
});