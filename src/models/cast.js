const mongoose = require('mongoose');

const castSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
        max: 120,
        min: 14,
    },
    born: {
        type: String,
        required: true,

    },
    nameInMovies: {
        type: String,
        required: true,
    },
    castImage: {
        type: String,
        required: true,
        validate: {
            validator: function(value) { /^https?:\/\//.test(v) },
            message: (props) => `This is invalid url for the cast image`
        }
    },
    

})