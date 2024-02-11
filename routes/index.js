const express = require('express');
const router = express.Router();
const { data } = require('../data.json');
const { projects } = data;

// Render index page
router.get('/', (req, res) => {
    res.locals.projects = data.projects;
    res.render('index');
});

// Render about page
router.get('/about', (req, res) => {
    res.render('abut');
});

// render individual project
router.get('/project/:id', (req, res, next) => {
    res.locals.id = req.params.id;

    if (projects[req.params.id]) {
        res.render('project', { project: projects });
    } else {
        const err = new Error();
        err.status = 404;
        next(err);
    }
});

module.exports = router;