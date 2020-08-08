// Dependencies
// =============================================================
var express = require("express");
var app = express();
var path = require("path");

// Sets up the HTML routes
// =============================================================

module.exports = function (app) {

    app.get("/exercise", function (req, res) {
        console.log("exercise route");
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
      })
      
      app.get("/stats", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
      })
    }