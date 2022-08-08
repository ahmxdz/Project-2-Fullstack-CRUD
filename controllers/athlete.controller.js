const Athlete = require('../models/athlete.model');
const Workout = require('../models/workout.model');

async function newAthlete(req, res, next) {
    const athletes = await Athlete.find({});
    await res.render("athlete/index", {user: req.user, name: req.query.name, title: 'All Athletes', athletes});
}

async function createAthlete (req, res, next) {
    try{
        console.log(req.body)
        const athlete = new Athlete(req.body)
        await athlete.save()
            res.redirect("/athlete/index/")
    }catch(err){
        throw err
        
    }
}

function addAthlete (req, res, next) {
    console.log("function reached")
    Workout.findById(req.params.workoutId)
    .populate('athletes').exec(function (err, workout) {
        console.log(req.params.workoutId)
        console.log(workout)
      workout.athletes.push(req.body.athleteId);
      console.log(req.body)
      console.log(req.body.athleteId)
      workout.save(function() {
        res.redirect(`/exercise/${req.params.exerciseId}`);
      });
    });
}


module.exports = {
    new: newAthlete,
    createAthlete,
    addAthlete
}