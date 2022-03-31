import React from "react";
import "./footer.scss";

const logoPath: string = require("assets/images/logo-footer.svg").default;

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer>
      <div className="container-fluid">
        <div className="row align-items-center footer">
          <div className="logo col-4 col-sm-6 col-md-2">
            <img src={logoPath} alt="logo" aria-label="logo image" />
          </div>
          <div className="footer-menu d-flex col-8 col-sm-6 col-md-3 justify-content-end justify-content-md-start">
            <a href="/privacy-policy" target="_blank" aria-label="privacy-policy link">
              privacyPolicy
            </a>
            <a href="/imprint" target="_blank" aria-label="imprint link">
              imprint
            </a>
          </div>
          <div className="d-flex col justify-content-center justify-content-md-end mt-2 mt-md-0">
            <span className="me-1" aria-label="copyright">
              copyright {currentYear}
            </span>
            {window.innerWidth < 460 && <br />}
            <span aria-label="footer rights">
              rights
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;