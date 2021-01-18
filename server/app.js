/* actual application */
const express = require('express');
const path = require('path');
const cors = require('cors');

const fileRouter = require('./controllers/file');
const middleware = require('./utils/middleware');

global.__basedir = __dirname;
const app = express();

// intercept and parse request before pass it to routres handlers
app.use(cors());
// app.use(middleware.uploadFile);
app.use(middleware.requestLogger);

// use router to handle routes
app.use('/api/files/', fileRouter);

// unknown endpoint and error handler
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);


module.exports = app;