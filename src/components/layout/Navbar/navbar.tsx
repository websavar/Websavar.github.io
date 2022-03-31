import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './navbar.scss';

import { } from "components";

import { LogoUrl } from 'constants/index';


const Navbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const activeTabChange = (_: any, newValue: number): void => {
    setActiveTab(newValue);
  };

  console.log('Navbar');

  return (
    <div className="navbar">
      <div className="container-fluid d-flex align-items-center">

        <div className="col-12 col-sm-1">
          <a aria-expanded="false" href={process.env.REACT_APP_BASE_URL} tabIndex={1}>
            <img src={LogoUrl} alt="logo" />
          </a>
        </div>

      </div>
    </div>
  );
}

export default React.memo(Navbar);