import http from './http-common';

const uploadFile = file => {
  let data = new FormData();
  data.append('file', file);

  const headers = {
    'Content-Type': 'multipart/form-data',
  };

  return http
    .post('/upload', data, headers)
    .then(response => response.data);
};

const downloadFile = (id) => {
  return http.get(`/download/${id}`, { responseType: 'blob' });
};

export default {
  uploadFile,
  downloadFile
};