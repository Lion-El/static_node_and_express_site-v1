const express = require('express');
const path = require('path');

// import route definitions
const routes = require('./routes');

// Instantiate Express app
const app = express();

// Setup view engine
app.use('/static', express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');

// Express middleware/route definitions
app.use(routes);

// ERROR HANDLERS
// 404 handler to catch undefined or non-existent route requests 
app.use((res, req, next) => {
    const err = new Error('Hey! That webpage does not exist');
    err.status = 404;
    console.log(`${err.message} (error:${err.status})`);
});

// Global error handler
app.use((err, res, req, next) => {
    if (err === 404) {
        console.log(`${err.message} (error:${err.status})`);
    }
    
});

app.listen(3000);