import React, { useState } from 'react';

import SelectFile from './components/SelectFile';
import Upload from './components/Upload';
import Done from './components/Done';


const App = () => {
  const [file, setFile] = useState('');
  const [uploading, setUploading] = useState(false);
  const [mina, setMain] = useState(true);
  const [success, setSuccess] = useState(false);

  const  klass = uploading ? 'sm-container' : 'container';

  const handleUpload = (event) => {
    console.log(event.target.files);
    setFile(event.target.files);
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
    }, 100000000000000);
  };

  return (
    <div className={klass}>
      {!uploading
        ? <SelectFile onSelect={handleUpload} show={uploading} />
        : <Upload show={uploading} file/>
      }
      {success && <Done show={uploading} />}
      {/* <Done show={!uploading} /> */}
    </div>
  );
};

export default App;