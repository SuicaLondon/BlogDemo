const express = require('express')
const Article = require('../models/articles')
const router = express.Router()

router.get('/new', (req, res) => {
    res.send('articles/new')
})

router.post('/', (req,res) => {
    const article = new Article()
})

module.exports = router