const express = require('express');
const router = express.Router();
const { data } = require('../data.json');
const { projects } = data;

router.get('/', (req, res) => {
    res.locals.projects = data.projects;
    console.log(res.locals.projects);
    res.render('index');
});

router.get('/about', (req, res) => {
    res.locals = data.projects;
    console.log(res.locals);
    res.render('about');
});

module.exports = router;