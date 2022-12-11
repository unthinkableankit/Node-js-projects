const mongoose = require('mongoose');
const { Schema } = mongoose;
const postSchema = new Schema({
    title: {
        type: String,
        // require: 'Title is required',
        // minlength: 4,
        // maxlength: 100
        required: true
    },
    body: {
        type: String,
        // require: 'Body is required',
        // minlength: 4,
        // maxlength: 150
        required: true
    }
})

module.exports = mongoose.model('Post', postSchema);