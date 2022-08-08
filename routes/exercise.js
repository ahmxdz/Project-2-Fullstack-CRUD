var express = require('express');
var router = express.Router();
var exerciseCtrl = require('../controllers/exercise.controller');
var workoutCtrl = require('../controllers/workout.controller');
var athletesCtrl = require('../controllers/athlete.controller')

/* GET home page. */
//Exercise Routes
router.get('/', exerciseCtrl.index);
router.get('/new', exerciseCtrl.newExercise);
router.get('/:id', exerciseCtrl.show);
router.post('/', isLoggedIn, exerciseCtrl.create);
router.put('/:id', exerciseCtrl.updateExercise);
router.delete('/:id', exerciseCtrl.deleteExercise);

//Workout Routes
router.post('/workout/:id', isLoggedIn, workoutCtrl.createWorkout);
router.put('/updateWorkout/:id/:exerciseId', workoutCtrl.updateWorkout);


//Athlete Routes
router.post('/:exerciseId/workout/:workoutId/athlete', isLoggedIn, athletesCtrl.addAthlete);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }
  

module.exports = router;