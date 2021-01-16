import React from 'react';

const Progress = ({ displayWhen: display }) => {
  return (
    <>
      {display
        ?
        <>
          <p className='progress-p'>Uploading...</p>
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