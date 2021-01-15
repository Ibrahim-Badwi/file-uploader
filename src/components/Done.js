import React, { useState, useEffect } from 'react';
import fileUploadService from '../services/fileUploadService';

import tickMArk from '../../assets/tick.svg';


const Done = ({ id }) => {
  const [src, setSrc] = useState('');

  useEffect(() => {
    fileUploadService
      .downloadFile(id)
      .then(response => {
        // setSrc(`data:image/jpeg;base64,${response.data}`);
        setSrc(URL.createObjectURL(response.data));
        console.log(response);
      });

    setSrc(id);
  }, []);

  const handleClick = (event) => {
    navigator.clipboard.writeText(id);
  };

  return (
    <div className='result'>
      <img className='tick-icon' src={tickMArk} alt='tick-mark' />
      <p>Uploaded Successfully!</p>
      <img className='uploaded-img' src={src} />
      <div>
        <input type='text' value={id} readOnly />
        <button onClick={handleClick}>Copy Link</button>
      </div>
    </div>
  );
};

export default Done;