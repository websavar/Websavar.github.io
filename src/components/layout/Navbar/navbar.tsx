import React from "react";
import './navbar.scss';
import { Link } from 'react-router-dom';

import { LogoUrl } from 'constants/index';

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="container-fluid d-flex align-items-center justify-content-center">

        <div className="col-12 col-sm-1">
          <Link to={process.env.REACT_APP_BASE_URL!}>
            <img src={LogoUrl} alt="logo" />
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Navbar;