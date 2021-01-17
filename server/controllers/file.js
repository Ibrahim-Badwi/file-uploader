const path = require('path');
const fileRouter = require('express').Router();
const uploadFileMiddleware = require('../middleware/upload');
const logger = require('../utils/logger');


fileRouter.post('/upload', async (request, response, next) => {
  try {
    await uploadFileMiddleware(request, response);

    if (request.file === undefined) {
      return response.status(400).send({ message: 'Please upload a file!' });
    }

    const fullUrl =
      request.protocol + '://' + request.get('host') + '/api/files/download/' + request.file.filename;

    return response.status(200).send({
      message: 'Uploaded the file successfully: ' + request.file.filename,
      url: fullUrl
    });
  } catch (error) {
    logger.error(error);
    // next(error);
  }
});

fileRouter.get('/download/:id', async (request, response, next) => {
  const id = request.params.id;
  const uploadsPath = __basedir + '/uploads/';

  request.id = id;
  return response.download(uploadsPath+id, id, error => next(error));
});

module.exports = fileRouter;