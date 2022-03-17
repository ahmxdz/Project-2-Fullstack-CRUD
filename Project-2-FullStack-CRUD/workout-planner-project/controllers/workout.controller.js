const Workout = require('../models/workout.model');
const Exercise = require('../models/exercise.model');

async function index(req, res, next) {
    const allWorkouts = await Workout.find({});
    console.log(allWorkouts)
        res.render('workout/index', {user: req.user, name: req.query.name, title: 'All Workouts', workout: allWorkouts});
}

async function newWorkout(req, res, next) {
    await res.render("workout/new", {title: 'Add Exercise'})
}

async function createWorkout (req, res, next) {
    try{
        console.log(req.body)
        const workout = new Workout(req.body)
        await workout.save()
        const exercise = await Exercise.findById(req.params.id)
        exercise.workouts.push(workout._id)
        await exercise.save()
            res.redirect(`/exercise/${exercise.id}`)
    }catch(err){
        throw err
        
    }
}

async function updateWorkout (req, res, next) {
    console.log("update workout function")
    console.log(req.body)
    console.log(req.params)
    await Workout.updateOne({_id: req.params.id}, {...req.body})
        res.redirect(`/exercise/${req.params.exerciseId}`)
}

async function deleteWorkout (req, res, next) {
    await Workout.deleteOne({_id: req.params.id})
        res.redirect(`/exercise/${req.params.exerciseId}`)

}


module.exports = {
    index,
    newWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout,
    

}