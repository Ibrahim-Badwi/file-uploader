/* actual application */
require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const fileRouter = require('./controllers/file');
const middleware = require('./utils/middleware');

global.__basedir = __dirname;

// intercept and parse request before pass it to routres handlers
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../dist')));
app.use(middleware.requestLogger);


// use router to handle routes
app.use('/api/files/', fileRouter);

// unknown endpoint and error handler
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);


module.exports = app;