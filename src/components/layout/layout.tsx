import React from 'react';
import Routers from 'Routes';
import './layout.scss';
import { Navbar } from 'components';

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