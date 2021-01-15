import React, { useState } from 'react';

import Upload from './components/Upload';
import Progress from './components/Progress';
import Done from './components/Done';

import fileUploadService from './services/fileUploadService';


const App = () => {
  const [selectedFile, setSelectedFile] = useState(undefined);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [id, setId] = useState('');

  const  klass = uploading ? 'sm-container' : 'container';

  const handleUpload = files => {
    let currentFile = files[0];
    const size = Math.round(currentFile.size / (1024*1024));

    if(size >= 2) return;

    setSelectedFile(currentFile);
    setUploading(true);

    fileUploadService
      .uploadFile(currentFile)
      .then(data => {
        setId(data.id);
        setUploading(false);
        setSuccess(true);
      })
      .catch(err => {
        console.log('could not upload the file');
      });
  };

  return (
    <div className={klass}>
      {!uploading && !success
        ? <Upload onSelect={handleUpload} displayWhen={uploading} />
        : <Progress displayWhen={uploading} file/>
      }
      {success && <Done id={id} />}
    </div>
  );
};

export default App;