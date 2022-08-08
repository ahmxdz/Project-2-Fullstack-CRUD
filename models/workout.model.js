const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({

        numOfReps: {
            type: Number,
            min: 1,
            max: 100,
            required: true
        },

        setNumber: {
            type: Number,
            min: 1,
            max: 100,
            required: true
        },

        weight: {
            type: Number,
            min: 1,
            max: 1000,
            required: true
        },
        date: {
            type: Date,
            default: function(){
                return new Date().getFullYear()
        }
    },
    athletes:[{type: Schema.Types.ObjectId, ref: 'Athlete'},]

},{
    timestamps: true
})

module.exports = mongoose.model('Workout', workoutSchema)