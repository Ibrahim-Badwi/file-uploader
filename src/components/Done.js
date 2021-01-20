import React, { useState, useEffect } from 'react';
import fileUploadService from '../services/fileUploadService';

import tickMArk from '../../assets/tick.svg';


const Done = ({ url }) => {
  const [src, setSrc] = useState('');
  const [notification, setNotification]  = useState({});

  let path = undefined;
  if (process.env.NODE_ENV === 'production') {
    path = url;
  } else {
    path = new URL(url).pathname;
  }

  useEffect(() => {
    fileUploadService
      .downloadFile(path)
      .then(response => {
        // setSrc(`data:image/jpeg;base64,${response.data}`);
        // setSrc(url);
        setSrc(URL.createObjectURL(response.data));
      })
      .catch(error => {
        console.log('Could not download the file');
        console.log(error);
      });
  }, [url]);

  const handleClick = (event) => {
    navigator.clipboard.writeText(url);
    setNotification({
      message: 'link copied to clipboard',
      style: { color: 'blue' }
    });

    setTimeout(() => {
      setNotification({});
    }, 2500);
  };

  return (
    <>
      <div className='result'>
        <img className='tick-icon' src={tickMArk} alt='tick-mark' />
        <p>Uploaded Successfully!</p>
        <img className='uploaded-img' src={src} />
        <div className='copy-container'>
          <input type='text' value={url} readOnly />
          <button onClick={handleClick}>Copy Link</button>
        </div>
      </div>
      <p className='message' style={notification.style}>{notification.message}</p>
    </>
  );
};

export default Done;