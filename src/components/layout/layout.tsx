import React from 'react';
import Pokemons from "pages/Pokemons";
import Routers from 'Routes';
import './layout.scss';
import { Navbar } from 'components';

import { Router, Routes, Route } from 'react-router-dom';
import Page404 from "pages/page404";


const Layout: React.FC = () => {

  return (
    <div className="app-container">
      <header>
        <Navbar />
      </header>

      <main>
        <Routers />
      </main>
    </div >
  );
}

export default Layout;