require('dotenv').config();

const PORT = process.env.PORT || 3001;
const PROJECT_ID = process.env.GCLOUD_PROJECT_ID;
const APPLICATION_CREDENTIALS = process.env.GCLOUD_APPLICATION_CREDENTIALS;
const STORAGE_BUCKET_URL = process.env.GCLOUD_STORAGE_BUCKET_URL;

module.exports = {
  PORT,
  PROJECT_ID,
  APPLICATION_CREDENTIALS,
  STORAGE_BUCKET_URL
};