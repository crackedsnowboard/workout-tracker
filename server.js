// Set up Express
const express = require('express')
const logger = require("morgan");
const mongoose = require("mongoose");
const mongojs = require("mongojs");
const path = require("path");
const Workout = require("./models/workout.js");

const PORT = process.env.PORT || 3000

const db = require("./models");

const app = express()

app.use(logger("dev"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
// app.use(require("./routes/api.js"));
// app.use(require("./routes/html.js"));

app.get("/exercise", function (req, res) {
  console.log("exercise route");
  res.sendFile(path.join(__dirname, "./public/exercise.html"));
})

app.get("/stats", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/stats.html"));
})

app.post("/api/workouts", (req, res) => {
  console.log("testing");
  db.Workout.create({})
    .then(dbWorkout => {
      console.log("say something" + dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json( err);
    });
})

app.post("api/workouts/exercise", (req, res) => {
  db.Workout.createCollection({})
})



// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });