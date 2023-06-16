import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="container-fluid footer-container">
      <footer className="row py-5 px-5 footer ">
        <div className="col-12 col-md-3 mb-5">
          <h5 className="footer-title">Beer styles</h5>
          <ul className="nav flex-column">
            <li className="footer-link p-0 ms-0 mb-2">IPA</li>
            <li className="footer-link p-0 ms-0 mb-2">Sour</li>
            <li className="footer-link p-0 ms-0 mb-2">Stout</li>
            <li className="footer-link p-0 ms-0 mb-2">Lager & Pilsner</li>
          </ul>
        </div>

        <div className="col-12 col-md-3 mb-5">
          <h5 className="footer-title">About</h5>
          <ul className="nav flex-column">
            <li className="footer-link p-0 ms-0 mb-2">Visit To Øl City</li>
            <li className="footer-link p-0 ms-0 mb-2">Journal</li>
            <li className="footer-link p-0 ms-0 mb-2">Contact</li>
            <li className="footer-link p-0 ms-0 mb-2">About us</li>
            <li className="footer-link p-0 ms-0 mb-2">Jobs</li>
          </ul>
        </div>

        <div className="col-12 col-md-3 mb-5">
          <h5 className="footer-title">Social</h5>
          <ul className="nav flex-column">
            <li className="footer-link p-0 ms-0 mb-2">Newsletter</li>
            <li className="footer-link p-0 ms-0 mb-2">Facebook</li>
            <li className="footer-link p-0 ms-0 mb-2">Twitter</li>
            <li className="footer-link p-0 ms-0 mb-2">Instagram</li>
            <li className="footer-link p-0 ms-0 mb-2">Youtube</li>
          </ul>
        </div>

        <div className="col-12 col-md-3 mb-5">
          <h5 className="footer-title">Shop Info</h5>
          <ul className="nav flex-column">
            <li className="footer-link p-0 ms-0 mb-2">FAQ</li>
            <li className="footer-link p-0 ms-0 mb-2">Privacy Policy</li>
            <li className="footer-link p-0 ms-0 mb-2">Terms & Conditions</li>
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
