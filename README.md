# Workout Tracker
The purpose of this app is to develope skills using a Mongo database (Mongoose schema) and Express for routes.

## User Story
A user will reach their fitness goals quicker when they track their workout progress.

When the user loads the page, they should be given the option to create a new workout, or continue with their last workout.
The user should be able to:

Add exercises to a previous workout plan.
Add new exercises to a new workout plan.
View multiple the combined weight of multiple exercises on the stats page.

## Installation
I used node.js, express and heroku to deploy the app. 

Check out Node [Node](https://nodejs.org/en/)
File Service [Express](http://expressjs.com/)
Heroku [Heroku](https://www.heroku.com/)


A few key code snippets that helped to build the program:

Route for posting new workouts
```
app.post("/api/workouts", (req, res) => {
  console.log("testing");
  Workout.create({})
    .then(dbWorkout => {
      console.log("say something" + dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json( err);
    });
})
```

### Link to deployed Team Profile generator
[Fitness-App](https://still-lake-01763.herokuapp.com/)


#### Author Links
[LinkedIn](linkedin.com/in/joel-mathen/) <br>
[GitHub](https://github.com/crackedsnowboard)