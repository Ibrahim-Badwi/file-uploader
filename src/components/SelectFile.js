import React from 'react';
import svg from '../../assets/image.svg';

const Header = () => {
  return (
    <div>
      <h1>Upload your image</h1>
      <p className="header-p">File should be Jpeg, Png,...</p>
    </div>
  );
};

const DragAndDrop = () => {
  return (
    <div className='drag-container'>
      <img src={svg} alt='svg1' />
      <p>Drag & Drop your image here</p>
    </div>
  );
};

const File = ({ onSelect }) => {
  return (
    <>
      <p className='sep'>Or</p>
      <div className='button-wrap'>
        <label className='new-button' htmlFor='upload'>Choose a file</label>
        <input
          id='upload'
          type='file'
          accept='.png,.jpeg,.svg,.gif'
          onChange={onSelect}
        />
      </div>
    </>
  );
};

const SelectFile = ({ onSelect }) => {
  return (
    <>
      <Header />
      <DragAndDrop />
      <File onSelect={onSelect} />
    </>
  );
};

export default SelectFile;