import React, { FunctionComponent, useState } from 'react';
import { StyledFileUpload } from './FileUpload.styled';
import { AiOutlineUpload } from 'react-icons/ai';
import { IconContext } from 'react-icons';

const FileUpload: FunctionComponent = () => {

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
              <label htmlFor='inputFile'><AiOutlineUpload />Choose File</label>
            </IconContext.Provider>
            <input id='inputFile' type='file' name='upfile' />
            <input id='uploadButton' type='submit' value='upload' />
          </form>
        </div>
      </div>
    </StyledFileUpload>
  );
}

export default FileUpload;