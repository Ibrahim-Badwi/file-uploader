import React from 'react';

const Progress = ({ show }) => {
  return (
    <>
      {show
        ? <div className='status-container'>
          <p>Uploading...</p>
        </div>
        : null
      }
    </>
  );
};

export default Progress;