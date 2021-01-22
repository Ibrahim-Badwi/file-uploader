const logger = require('../utils/logger');

const requestLogger = (request, response, next) => {
  logger.info('Method:', request.method);
  logger.info('Path:  ', request.path);
  logger.info('Body:  ', request.body);
  logger.info('---');
  next();
};

const unknownEndpoint = (request, response) => {
  return response.status(404).send({ error: 'unknown endpoint' });
};

const errorHandler = (error, request, response, next) => {
  if(error.code === 'ENOENT') {
    return response.status(500).send({
      message: `Could not download the file: ${request.id}`,
    });
  } else if (error.code === 'LIMIT_FILE_SIZE') {
    return response.status(500).send({
      message: 'File size cannot be larger than 2MB!',
    });
  }
};

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler
};