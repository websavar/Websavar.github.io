import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'Routes';

import './layout.scss';
import { Navbar } from 'components';
import { Footer } from 'components';

const Layout: React.FC = () => {
  console.log('Layout');

  return (
    <Router>
      <div className="app-container">
        <header>
          <Navbar />
        </header>

        <main>
          <div className="container-fluid main-container" >
            <div className='row'>
              <div className='col'>
                <Routes />
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div >
    </Router>
  );
}

export default Layout;