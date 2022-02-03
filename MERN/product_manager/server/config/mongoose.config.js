const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/pets", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("There has been a connection to singles in your area"))
    .catch(err => console.log("Something went wrong when connecting to the singles in your area", err));