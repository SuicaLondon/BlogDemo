const mongoose = require('mongoose')

const articlesSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    title: {
        type: String
    },
    title: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('Article', articlesSchema)