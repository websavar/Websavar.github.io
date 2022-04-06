import React from 'react';
import { Link } from 'react-router-dom';
import { page404Url } from 'constants/index';
import { Button } from 'mui';

function Page404() {

  return (
    <div className='d-flex flex-column align-items-center justify-content-center h-100'>
      <img src={page404Url} alt="page not found" style={{ width: '200px' }} />
      <div className='pt-4 text-center'>
        <h5>This is not the page that you are looking for!</h5>
        <p>Please click on a Pokemon on the list</p>
      </div>
    </div>
  );
}

export default Page404;