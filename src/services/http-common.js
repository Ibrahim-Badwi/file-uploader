import axios from 'axios';

const BASE_URL = '/api/files';

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json'
  }
});