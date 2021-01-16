/* entry point */
const app = require('./app');
const http = require('http');
const config = require('./utils/config');
const logger = require('./utils/logger');

// server uses our app as a request handler
const server = http.createServer(app);

server.listen(config.PORT, () => {
  logger.info(`Upload Service is running on port ${config.PORT}`);
});