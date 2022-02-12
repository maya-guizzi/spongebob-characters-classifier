const express = require('express')
const app = express()

app.set("view engine", "ejs")

app.get('/', (req,res) => {
    res.render('index')
})

app.get('/test', (req,res,next) => {
    res.render('test')
})

app.listen(3000)

//1 - Add a /test route, and load a test.ejs file 
//2 - Make a link on index.ejs to go to /test and viceversa using "a" HTML tag