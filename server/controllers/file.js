const fileRouter = require('express').Router();
const multer = require('multer');
const { Storage } = require('@google-cloud/storage');
const { fileBuffer, fileValidator, fileUploader } = require('../utils/uploader');
const logger = require('../utils/logger');


fileRouter.post('/upload',
  fileBuffer,
  async (request, response, next) => {
    try {
      fileValidator(request, response, next);
      fileUploader(request, response, next);
    } catch (error) {
      next(error);
    }
});

fileRouter.get('/download/:id', async (request, response, next) => {
  const id = request.params.id;
  const uploadsPath = __basedir + '/uploads/';

  request.id = id;
  return response.download(uploadsPath+id, id, error => next(error));
});

module.exports = fileRouter;