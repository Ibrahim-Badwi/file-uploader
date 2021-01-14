const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fileController = require('./controllers/file.controllers');


global.__basedir = __dirname;
const app = express();
// const upload = multer({ dest: './uploads' });

app.use(cors());

// app.post('/upload', (request, response) => {
//   console.log(request, request.body);

//   setTimeout(() => {
//     response.send({ message: 'file uploaded succefully', url: 'https://stackoverflow.com/questions/5062614/how-to-decide-when-to-use-node-js?rq=1' });
//   }, 100);
// });

app.post('/upload', fileController.upload);

// app.get('/files', controller.getListFiles);

// app.get('/files/:name', controller.download);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`upload service is runing on port ${PORT}`);
});