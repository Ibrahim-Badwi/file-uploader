const util = require('util');
const multer = require('multer');
const maxSize = 2 * 1024 * 1024;


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + '/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single('file');

const uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;