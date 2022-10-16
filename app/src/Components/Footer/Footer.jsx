import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div className="footer__head">
        <h2>Follow us on</h2>
        <h5>Navigation</h5>
        </div>
        <div className="footer__links">
          <ul className="ul1">
            <li>
              <a href="https://">Discord</a>
            </li>
            <li>
              <a href="https://">Twitter</a>
            </li>
            <li>
              <a href="https://">Instagram</a>
            </li>
            <li>
              <a href="https://">Facebook</a>
            </li>
          </ul>

          <ul className="ul2">
            <li>
              <a href="https://">Home</a>
            </li>
            <li>
              <a href="https://">Style Guide</a>
            </li>
            <li>
              <a href="https://">Licenses</a>
            </li>
            <li>
              <a href="https://">Changelog</a>
            </li>
          </ul>
        </div>
        <p>Powered by Webflow</p>
        <p>Made by Tim Poličar</p>
      </div>
    </div>
  );
};

export default Footer;
