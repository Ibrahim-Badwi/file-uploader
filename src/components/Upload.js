import React from 'react';

const Filler = () => {
  return (
    <div className='filler'></div>
  );
};

const Upload = ({ show, onComplete }) => {
  return (
    <>
      {show
        ?
        <>
          <p className="upload-p">Uploading...</p>
          <div className='progress-bar'>
            <Filler />
          </div>
        </>
        : null
      }
    </>
  );
};

export default Upload;