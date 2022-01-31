const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        // required: [true, "title Required"],
        // minlength: [3, " title needs to be 3 characters long"]
    },

    price: {
        type: Number,
        min: [1, "price Required"]
    },

    description: {
        type: String,
        // required: [true, "description Required"],
        // minlength: [3, " description needs to be 3 characters long"]
    }
},
    { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;