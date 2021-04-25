'use strict';
const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();

hbs.registerPartials(path.join(__dirname, '../views/components/'));
app.use(express.static(path.join(__dirname, '../public/')));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../views/pages/'));
app.get('/', (req, res)=>{
    res.render('index');
});
app.get('/about', (req, res)=>{
    res.render('about');
});
app.get('/weather', (req, res)=>{
    res.render('weather');
});
app.get('*', (req, res)=>{
    res.render('error');
});

app.listen(8000, ()=>{
    console.log('The weather app is runnng on http://localhost:8000');
});