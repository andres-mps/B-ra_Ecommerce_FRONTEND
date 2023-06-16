import React, { useState } from "react";
import "./AddToCart.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartItem from "./CartItem";
const scrollDrop = {
  name: "Enable both scrolling & backdrop",
  scroll: true,
  backdrop: true,
};

function AddToCart() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((state) => !state);

  return (
    <div className="add-to-cart-container">
      <button onClick={toggleShow} className="add-to-cart btn btn-outline-dark py-2">
        Add to cart
      </button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        {...scrollDrop}
        className="custom-offcanvas"
      >
        <Offcanvas.Header closeButton>
          <h2>Your cart</h2>
        </Offcanvas.Header>
        <CartItem />
      </Offcanvas>
    </div>
  );
}

export default AddToCart;
