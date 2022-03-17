const Exercise = require('../models/exercise.model');
const Athlete = require('../models/athlete.model')

async function index(req, res, next) {
    const allExercises = await Exercise.find({});
        res.render('exercise/index',{user: req.user, name: req.query.name, title: 'All Exercises', exercise: allExercises  });
}
async function newExercise(req, res, next) {
    await res.render("exercise/new", {user: req.user, name: req.query.name, title: 'Create Exercise'})
}

async function show (req, res, next) {
    console.log(req.params.id)
    const exercise = await Exercise.findById(req.params.id).populate({
        path: 'workouts',
        populate: {path: 'athletes'}
     })
    const athletes = await Athlete.find({});
    res.render('exercise/show', {user: req.user, name: req.query.name, title: "Workout Details", exercise, athletes})
}

async function create (req, res, next) {
    try{
        console.log(req.body)
        const exercise = new Exercise(req.body)
        await exercise.save()
            res.redirect('/exercise')
    }catch(err){
        throw err
        
    }
}

async function updateExercise (req, res, next) {
    console.log(req.body)
    console.log(req.params)
    await Exercise.updateOne({_id: req.params.id}, {...req.body})
        res.redirect(`/exercise/${req.params.id}`)
}

async function deleteExercise (req, res, next) {
    await Exercise.deleteOne({_id: req.params.id})
        res.redirect('/exercise')

}


module.exports = {
    index,
    newExercise,
    show,
    create,
    updateExercise,
    deleteExercise,
}