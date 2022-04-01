import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'Routes';

import './layout.scss';
import { Navbar, Footer } from 'components';
import Pokemons from "pages/Pokemons";

const Layout: React.FC = () => {
  console.log('Layout');

  return (
    <div className="app-container">
      <header>
        <Navbar />
      </header>

      <main>
        <div className="container-fluid main-container" >
          <div className='row'>
            <div className='col-8'>
              <Pokemons />
            </div>

            <div className='col-4'><Routes /></div>
          </div>
        </div>
      </main>

      <Footer />
    </div >
  );
}

export default Layout;