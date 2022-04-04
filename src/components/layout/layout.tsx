import React from 'react';
import Routes from 'Routes';

import './layout.scss';
import { Navbar } from 'components';
import Pokemons from "pages/Pokemons";

const Layout: React.FC = () => {
  console.log('Layout');

  return (
    <div className="app-container">
      <header>
        <Navbar />
      </header>

      <main>
        <div className="container-fluid" id='main-container'>
          <div className='row vh-100'>
            <div className='col-12 col-sm-6 col-lg-7 col-xl-8' id='pokemons-container'>
              <Pokemons />
            </div>

            <div className='col-12 col-sm-6 col-lg-5 col-xl-4 order-first order-sm-last p-2' id='pokemon-container'>
              <Routes />
            </div>
          </div>
        </div>
      </main>
    </div >
  );
}

export default Layout;