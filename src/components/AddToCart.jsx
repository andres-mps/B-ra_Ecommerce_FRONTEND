import React, { useState } from "react";
import "./AddToCart.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartItem from "./CartItem";
function AddToCart() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((state) => !state);

  return (
    <div>
      <button onClick={toggleShow} className="add-to-cart btn btn-outline-dark py-2">
        Add to cart
      </button>
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
          <CartItem/>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default AddToCart;
