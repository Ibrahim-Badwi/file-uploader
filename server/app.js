const express = require('express');
const multer = require('multer');

const app = express();
const upload = multer({ dest: './uploads' });


app.post('/upload', upload.single('uploaded-file'), (request, response) => {
  console.log(request.file, request.body);

  response.send({ message: 'file uploaded succefully' });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`upload service is runing on port ${PORT}`);
});