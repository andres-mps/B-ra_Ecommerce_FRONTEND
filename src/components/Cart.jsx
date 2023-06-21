import React, { useState } from "react";
import "./AddToCart.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartItem from "./CartItem";
import "./Navbar.css";
function Cart() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((state) => !state);

  return (
    <div>
      <svg
        className="nav-icons"
        aria-hidden="true"
        focusable="false"
        role="presentation"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        onClick={toggleShow}
      >
        <path
          fill="black"
          fillRule="evenodd"
          d="M15.6 6.3V5c0-2-1.6-3.6-3.6-3.6S8.4 3 8.4 5v1.3H4.2v16.3h15.6V6.3h-4.2zM10.4 5c0-.9.7-1.6 1.6-1.6.9 0 1.6.7 1.6 1.6v1.3h-3.2V5zm7.4 15.6H6.2V8.3H17.8v12.3z"
        ></path>
      </svg>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="offcanvas-container custom-offcanvas container"
      >
        <Offcanvas.Header closeButton>
          <h2 className="tittle-cart">Your cart</h2>
        </Offcanvas.Header>
        <div className="d-flex justify-content-between">
          <p className="ms-3 subtittle-cart">PRODUCT</p>
          <p className="me-3 subtittle-cart">PRICE</p>
        </div>
        <Offcanvas.Body>
          <CartItem />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Cart;
