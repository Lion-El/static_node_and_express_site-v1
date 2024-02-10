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
    res.render('about');
});

// render individual project
router.get('/project/:id', (req, res) => {
    res.locals.project = data.projects;
    const id = req.params.id;

    if (projects[id]) {
        res.render('project', { id });
    } else {
        const err = new Error('Hey! That webpage does not exist');
        err.status = 404;
        console.log(`${err.message} (error:${err.status})`);
        next(err);
    }
});

module.exports = router;