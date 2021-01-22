import http from './http-common';

const uploadFile = file => {
  let data = new FormData();
  data.append('file', file);

  const headers = {
    'Content-Type': 'multipart/form-data',
  };

  return http
    .post('/upload', data, headers)
    .then(response => response.data)
    .catch(error => console.log(error, '**************'));
};

const downloadFile = (id) => {
  return http.get(id, { responseType: 'blob' });
};

export default {
  uploadFile,
  downloadFile
};