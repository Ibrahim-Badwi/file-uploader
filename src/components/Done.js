import React from 'react';
import tickMArk from '../../assets/tick.svg';

const Result = () => {
  return (
    <div className='result'>
      <img className='tick-icon' src={tickMArk} alt='tick-mark' />
      <p>Uploaded Successfully!</p>
      <img className='uploaded-img' src={require('../../assets/mern-600x200.jpg')} />
      <div>
        <input type='text' value='https://www.flaticon.com/free-icon/tick_87932?search-type=icons&k=1610365571354&related_id=87932&origin=search' />
        <button>Copy Link</button>
      </div>
    </div>
  );
};

const Done = ({ show }) => {
  return (
    <>
      { show ? <Result /> : null }
    </>
  );
};

export default Done;