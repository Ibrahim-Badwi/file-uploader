import React, { useState } from 'react';

import SelectFile from './components/SelectFile';
import Upload from './components/Upload';
import Done from './components/Done';

import uploadService from './services/fileUploadService';


const App = () => {
  const [selectedFile, setSelectedFile] = useState('');
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [url, setUrl] = useState('');

  const  klass = uploading ? 'sm-container' : 'container';

  const handleUpload = file => {
    console.log(file);
    setSelectedFile(file);
    setUploading(true);

    uploadService
      .uploadFile(setSelectedFile)
      .then(response => {
        console.log(response);
        setUploading(false);
        // setUrl(response.url);
        setUrl('../../assets/mern-600x200.jpg');
        setSuccess(true);
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