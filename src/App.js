import React, { useState } from 'react';

import Upload from './components/Upload';
import Progress from './components/Progress';
import Done from './components/Done';

import fileUploadService from './services/fileUploadService';


const App = () => {
  const [selectedFile, setSelectedFile] = useState(undefined);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [url, setUrl] = useState('');
  const [notification, setNotification]  = useState({});

  const  klass = uploading ? 'sm-container' : 'container';

  const handleUpload = files => {
    let currentFile = files[0];
    const size = Math.round(currentFile.size / (1024*1024));

    if(size >= 2) {
      setNotification({
        message: 'File size cannot be larger than 2MB!',
        style: { color: 'red' }
      });

      setTimeout(() => {
        setNotification({});
      }, 2500);
      return;
    }

    setSelectedFile(currentFile);
    setUploading(true);

    fileUploadService
      .uploadFile(currentFile)
      .then(data => {
        setUrl(data.fileLocation);
        console.log(data.fileLocation, '****************');
        setUploading(false);
        setSuccess(true);
      })
      .catch(err => {
        console.log(err);
        console.log('could not upload the file');
      });
  };

  return (
    <div className={klass}>
      {!uploading && !success
        ? <Upload onSelect={handleUpload} displayWhen={uploading} />
        : <Progress displayWhen={uploading} file/>
      }
      {success && <Done url={url} />}

      <p className='message' style={notification.style}>{notification.message}</p>
    </div>
  );
};

export default App;