import React, { useState } from 'react';

import SelectFile from './components/SelectFile';
import Upload from './components/Upload';
import Done from './components/Done';

import uploadService from './services/fileUploadService';


const App = () => {
  const [selectedFile, setSelectedFile] = useState(undefined);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [url, setUrl] = useState('');

  const  klass = uploading ? 'sm-container' : 'container';

  const handleUpload = file => {
    console.log(file, '********** FILE OBJECT');
    setSelectedFile(file);
    console.log(selectedFile, '********** SELECTD FILE');
    setUploading(true);

    uploadService
      .uploadFile(selectedFile)
      .then(response => {
        console.log(response);
        setUploading(false);
        // setUrl(response.url);
        setUrl('../../assets/mern-600x200.jpg');
        setSuccess(true);
      })
      .catch(err => {
        console.log('could not upload the file');
        console.log(err);
      });
  };

  const upload = () => {

  };

  return (
    <div className={klass}>
      {!uploading && !success
        ? <SelectFile onSelect={handleUpload} show={uploading} />
        : <Upload show={uploading} file/>
      }
      {success && <Done url={url} />}
    </div>
  );
};

export default App;