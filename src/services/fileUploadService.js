import http from './http-common';

const uploadFile = file => {

  console.log(file, '##########################');
  let data = new FormData();

  data.append('file', file);

  return http.post('/upload', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  });
};

const getFiles = () => {
  return http.get('/files');
};

const getFile = (id) => {
  return http.get(`/files/${id}`);
};

export default {
  uploadFile,
  getFiles,
  getFile
};