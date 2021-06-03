const mongoose = require('mongoose')
const marked = require('marked')
const slugify = require('slugify')
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
    },
    slug: {
        type: String,
        require: true,
        unique: true
    }
})

articlesSchema.pre('validate', function(next) {
    if(this.title) {
        this.slug = slugify(this.title, {lower: true, strict: true})
    }
    next()
})

module.exports = mongoose.model('Article', articlesSchema)