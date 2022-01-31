const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    startup: {
        type: String,
        required: [true, "Startup Required"],
        minlength: [6, " Startup needs to be 6 characters long"]
    },

    punchline: {
        type: String,
        required: [true, "Punchline Required"],
        minlength: [3, " Punchline needs to be 3 characters long"]
    }
},
    { timestamps: true }
);

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;