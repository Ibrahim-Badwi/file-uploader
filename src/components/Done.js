import React, { useState, useEffect } from 'react';
import uploadService from '../services/fileUploadService';

import tickMArk from '../../assets/tick.svg';

const Done = ({ url }) => {
  const [src, setSrc] = useState('');

  console.log(url, '****************');
  useEffect(() => {
    setSrc(url);
  }, [url]);

  const handleClick = (event) => {
    console.log(url, '@@@@@@@@@@@');
  };

  return (
    <div className='result'>
      <img className='tick-icon' src={tickMArk} alt='tick-mark' />
      <p>Uploaded Successfully!</p>
      <img className='uploaded-img' src={src} />
      <div>
        <input type='text' value={url} readOnly />
        <button onClick={handleClick}>Copy Link</button>
      </div>
    </div>
  );
};

export default Done;