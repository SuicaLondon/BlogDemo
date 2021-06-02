const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()

mongoose.connect('mongodb://localhost/blogdemo', { useNewUrlParser: true, useUnifiedTopology: true})

app.set('view engine', 'ejs')
app.use('/articles', articleRouter)

app.get('/', (req, res)=> {
    const articles = [
        {
            title: 'Test',
            createdAt: new Date(),
            description: 'Description'
        },
        {
            title: 'Test 2',
            createdAt: new Date(),
            description: 'Description 2'
        }
    ]
    res.render('article/index', {articles: articles})
})

app.listen(5000)