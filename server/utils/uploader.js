const multer = require('multer');
const { Storage } = require('@google-cloud/storage');


// file size must be 2M or less
const maxSize = 2 * 1024 * 1024;

// create a Buffer from file by using memory storage
const fileBuffer = (request, response, next) => {
  const upload = multer({
    storage:  multer.memoryStorage(),
    limits: { fileSize: maxSize },
  }).single('file');

  upload(request, response, error => {
    if (error instanceof multer.MulterError) {
      return response.status(500).send({ message: `Multer ${error.message}, ${error.field}` });
    } else if (error) {
      return response.status(500).send({ message: error.message });
    }
    next();
  });
};

// check if file field included in request
const fileValidator = (request, response, next) => {
  if (request.file === undefined) {
    return response.status(400).send({ message: 'Please upload a file!' });
  }
};

// upload our file to cloud
const fileUploader = (request, response, next) => {
  //  initiate a Storage instance with firebase credentials
  const storage = new Storage({
    projectId: process.env.GCLOUD_PROJECT_ID,
    keyFilename: process.env.GCLOUD_APPLICATION_CREDENTIALS
  });

  // create a container for objects (files)
  const bucket = storage.bucket(process.env.GCLOUD_STORAGE_BUCKET_URL);

  // firebase uses Blobs (Binary Large Objects), can store binary data in a database.
  const blob = bucket.file(request.file.originalname);

  // initiate a writable stream
  // allow us to work with large amounts of data that we need to process one chunk at a time.
  // we use writable stream to write data
  const stream = blob.createWriteStream({
    metadata: {
      contentType: request.file.mimetype,
    },
  });

  // check for events
  stream.on('error', (error) => next(error));
  stream.on('finish', () => {
    const url = `${process.env.GCLOUD_STORAGE_URL}/v0/b/${
      bucket.name
    }/o/${encodeURI(blob.name)}?alt=media`;

    return response
      .status(200)
      .send({ fileName: request.file.originalname, fileLocation: url });
  });

  // when there is no more data to be consumed from the stream the end event gets emitted
  stream.end(request.file.buffer);
  // next();
};

module.exports = {
  fileBuffer,
  fileValidator,
  fileUploader
};