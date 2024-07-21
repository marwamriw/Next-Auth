const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const bookSchema = new Schema ({
    title: {
        type: String,
        required : true
    },
    author: {
        type: String,
        required : true
    },
    genre: {
        type: String,
        required : true
    },
    pages: {
        type: Number,
        default: 0
    },
    coverImage: {
        type: String,
        default : null
    },
    language: {
        type: String,
    }
},
        {timestamps: true} )

module.exports.bookModel = mongoose.model("book", bookSchema )