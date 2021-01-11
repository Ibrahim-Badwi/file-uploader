import React from 'react';

const Done = ({ show }) => {
  return (
    <>
      {show
        ? <p>Done</p>
        : null
      }
    </>
  );
};

export default Done;