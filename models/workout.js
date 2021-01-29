const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date(),
    },
    exercises: [
        {
            type: {
                type: String,
                required: "Enter an exercise type",
            },
            name: {
                type: String,
                required: "Enter exercise."
            },
            duration: {
                type: String,
                required: "Enter time worked out"
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
        }
    ]


});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;