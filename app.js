const express = require('express');
const path = require('path');

// import route definitions
const routes = require('./routes');

// Instantiate Express app
const app = express();


// Static middleware for serving static files
app.use('/static', express.static(path.join(__dirname, 'public')));

// Setup view engine
app.set('view engine', 'pug');

// Express middleware/route definitions
app.use(routes);

// ERROR HANDLERS
// 404 handler to catch undefined or non-existent route requests 
app.use((req, res, next) => {
    console.log('404 error handler called');

    const err = new Error();
    err.status = 404;
    err.message = 'Hey!  The page you\'re looking for does not exist.';
    console.log(`${err.message} (error:${err.status})`);
    res.status(404).render('page-not-found', { err });
});

// Global error handler
app.use((err, req, res, next) => {
    console.log('Global error handler called');

    if (err.status === 404) {
        err.message = 'Hey! the project you requested does not exist';
        console.log(`${err.message} (error:${err.status})`);
        res.status(404).render('page-not-found', { err });
    } else {
        err.status = 500;
        err.message ='something went wrong on the server';
        res.status(500).render('error', { err });
        console.log(`${err.message} (error:${err.status})`);
    }
    
});

app.listen(3000, () => {
    console.log('server listening on port 3000');
});

// module.exports = app;