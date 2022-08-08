const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    exerciseName: {
        type: String,
        required: true
    },

    equipment: {
        type: String,
        required: true
    },

    targetMuscle: {
        type: String,
        required: true
    },
    workouts: [{type: Schema.Types.ObjectId, ref: 'Workout'}],
},{
    timestamps: true
})


module.exports = mongoose.model('Exercise', exerciseSchema)