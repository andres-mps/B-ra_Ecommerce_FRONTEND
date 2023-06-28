import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="container-fluid p-0">
      <footer className="row py-5 px-5 footer">
        <div className="col-6 col-md-3 mb-5">
          <h5 className="footer-title">Beer styles</h5>
          <ul className="nav flex-column">
            <NavLink className="footer-link p-0 ms-0 mb-2" to="/styles/ipa">
              <li>IPA</li>
            </NavLink>
            <NavLink className="footer-link p-0 ms-0 mb-2" to="/styles/sour">
              <li>Sour</li>
            </NavLink>
            <NavLink className="footer-link p-0 ms-0 mb-2" to="/styles/stout">
              <li>Stout</li>
            </NavLink>
            <NavLink className="footer-link p-0 ms-0 mb-2" to="/styles/lager-and-pilsner">
              <li>Lager & Pilsner</li>
            </NavLink>
          </ul>
        </div>

        <div className="col-6 col-md-3 mb-5">
          <h5 className="footer-title">About</h5>
          <ul className="nav flex-column">
            <NavLink className="footer-link p-0 ms-0 mb-2" to="/about-this-project">
              <li>Journal</li>
            </NavLink>
            <NavLink className="footer-link p-0 ms-0 mb-2" to="/about-this-project">
              <li>Contact</li>
            </NavLink>
            <NavLink className="footer-link p-0 ms-0 mb-2" to="/about-this-project">
              <li>About us</li>
            </NavLink>
            <NavLink className="footer-link p-0 ms-0 mb-2" to="/about-this-project">
              <li>Jobs</li>
            </NavLink>
          </ul>
        </div>

        <div className="col-6 col-md-3 mb-5">
          <h5 className="footer-title">Social</h5>
          <ul className="nav flex-column">
            <NavLink className="footer-link p-0 ms-0 mb-2" to="/about-this-project">
              <li>Newsletter</li>
            </NavLink>
            <NavLink className="footer-link p-0 ms-0 mb-2" to="/about-this-project">
              <li>Facebook</li>
            </NavLink>
            <NavLink className="footer-link p-0 ms-0 mb-2" to="/about-this-project">
              <li>Twitter</li>
            </NavLink>
            <NavLink className="footer-link p-0 ms-0 mb-2" to="/about-this-project">
              <li>Instagram</li>
            </NavLink>
            <NavLink className="footer-link p-0 ms-0 mb-2" to="/about-this-project">
              <li>Youtube</li>
            </NavLink>
          </ul>
        </div>

        <div className="col-6 col-md-3 mb-5">
          <h5 className="footer-title">Shop Info</h5>
          <ul className="nav flex-column">
            <NavLink className="footer-link p-0 ms-0 mb-2" to="/about-this-project">
              <li>FAQ</li>
            </NavLink>{" "}
            <NavLink className="footer-link p-0 ms-0 mb-2" to="/about-this-project">
              <li>Privacy Policy</li>
            </NavLink>{" "}
            <NavLink className="footer-link p-0 ms-0 mb-2" to="/about-this-project">
              <li>Terms & Conditions</li>
            </NavLink>
          </ul>
        </div>

        <div className="container-fluid border-top pt-5">
          <p className="text-center" style={{ color: "white", fontWeight: "100" }}>
            © 2022 Company, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
