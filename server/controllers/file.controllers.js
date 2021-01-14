const uploadFileMiddleware = require('../middleware/upload');

const upload = async (req, res) => {
  try {
    await uploadFileMiddleware(req, res);

    // console.log(req, '****************');

    if (req.file === undefined) {
      return res.status(400).send({ message: 'Please upload a file!' });
    }

    res.status(200).send({
      message: 'Uploaded the file successfully: ' + req.file.originalname,
    });
  } catch (err) {
    console.log(err, '@@@@@@@@@@@@@@@@@@@');
    res.status(500).send({
      // message: `Could not upload the file: ${req.file.originalname}. ${err}`,
      message: `Could not upload the file:  ${err}`,
    });
  }
};

module.exports = {
  upload
};