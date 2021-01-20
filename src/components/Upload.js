import React from 'react';
import Dropzone from 'react-dropzone';

import svg from '../../assets/image.svg';

const Upload = ({ onSelect }) => {
  const handleSelect = event => {
    onSelect(event.target.files);
  };

  const handleDrop = files => {
    onSelect(files);
  };

  return (
    <>
      <div>
        <h1 className='header-title'>Upload your image</h1>
        <p className='header-p'>File should be Jpeg, Png,...</p>
      </div>

      <Dropzone onDrop={acceptedFiles => handleDrop(acceptedFiles)} noClick>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps({ className: 'drag-container' })}>
              <img src={svg} alt='svg1' />
              <input {...getInputProps()} />
              <p>Drag and drop some files here</p>
            </div>
          </section>
        )}
      </Dropzone>

      <p className='sep'>Or</p>
      <div className='button-container'>
        <label className='button-label' htmlFor='upload'>Choose a file</label>
        <input
          id='upload'
          type='file'
          encType="multipart/form-data"
          accept='.png,.jpg,.jpeg,.svg,.gif'
          onChange={acceptedFiles => handleSelect(acceptedFiles)}
        />
      </div>
    </>
  );
};

export default Upload;