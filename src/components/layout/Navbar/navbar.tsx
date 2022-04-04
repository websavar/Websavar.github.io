import React from "react";
import './navbar.scss';

import { LogoUrl } from 'constants/index';

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="container-fluid d-flex align-items-center justify-content-center">

        <div className="col-12 col-sm-1">
          <a aria-expanded="false" href={process.env.REACT_APP_BASE_URL} tabIndex={1}>
            <img src={LogoUrl} alt="logo" />
          </a>
        </div>

      </div>
    </div>
  );
}

export default Navbar;