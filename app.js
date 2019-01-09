const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// Log requests to the console.
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Models
let models = require('./models');

//Sync database
models.sequelize.sync().then(function () {
   console.log('Database works');
}).catch(function () {
    console.log('Something wrong with database');
});

//routers
let exercisesRouter = require('./routes/exercises');
let itemsRouter = require('./routes/items');

app.use('/api/exercises', exercisesRouter);
app.use('/api/items', itemsRouter);

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
}));

module.exports = app;