import React from 'react';
import { Link } from 'react-router-dom';
import { placeholder } from 'constants/index';

function PageSelect() {

  return (
    <div className='d-flex flex-column align-items-center justify-content-center h-100'>
      <img src={placeholder} alt="placeholder" style={{ width: '200px' }} />
      <div className='pt-4 text-center'>
        <h5>Please select a Pokemon from the list</h5>
      </div>
    </div>
  );
}

export default PageSelect;