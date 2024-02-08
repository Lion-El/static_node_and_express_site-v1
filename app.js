const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));
app.set('view engine', 'pug');

app.use(routes);

app.listen(3000);
