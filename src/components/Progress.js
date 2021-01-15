import React from 'react';

const Progress = ({ show }) => {
  return (
    <>
      {show
        ?
        <>
          <p className='upload-p'>Uploading...</p>
          <div className='progress-bar'>
            <div className='filler'></div>
          </div>
        </>
        : null
      }
    </>
  );
};

export default Progress;