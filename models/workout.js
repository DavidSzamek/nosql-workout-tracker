//mongoose dependencies

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//schema

const workoutSchema = new Schema({

    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [{
        type: {
            type: String,
            required: true
        }, 
        name: {
            type: String,
            required: true
        }, 
        duration: {
            type: Number
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        }, 
        distance: {
            type: Number 
        }
    }]
},
    {
        toJSON: { virtuals: true }
    });

workoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;