import React, { FunctionComponent, useState } from 'react';
import { StyledFileUpload } from './FileUpload.styled';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { IconContext } from 'react-icons';

const FileUpload: FunctionComponent = () => {

  const [filename, setFilename] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.target.files != null) {
      setFilename(event.target.files[0].name)
    }
  };

  return(
    <StyledFileUpload>
      <div className='accordion-row'>
        <div className='accordion-col-left'>
          <p>upfile</p>
        </div>
        <div className='accordion-col-right'>
          <p>Upload a file</p>
          <form encType='multipart/form-data' method='POST' action='/api/fileanalyse'>
            <IconContext.Provider value={{ style: 
              { marginRight: '5px', verticalAlign: 'top', paddingTop: '3px' } 
            }}>
              <div className='label-container'>
                <label className='input-label' htmlFor='inputfield'><AiOutlineFileAdd />
                  {filename !== '' ? filename : 'Choose File...'}
                </label>
                <input id='inputfield' type='file' name='upfile' onChange={handleChange} />
                <label className='submit-label' htmlFor='button'>Upload</label>
                <input id='button' type='submit' value='Upload' />
              </div>
            </IconContext.Provider>
          </form>
        </div>
      </div>
    </StyledFileUpload>
  );
}

export default FileUpload;