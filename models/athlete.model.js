const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const athleteSchema = new Schema({
    Name: {
        type: String,
        required: true
    },   
},{
    timestamps: true
})


module.exports = mongoose.model('Athlete', athleteSchema)