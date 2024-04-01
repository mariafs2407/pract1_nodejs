const { Schema, model} = require("mongoose");

const moviesShew = new Schema({
    title: String,
    year: String,
    rate: String,
    director: String

},{
    timestamos: true,
    versionKey: false,
});

module.exports = model("Movies", moviesShew)