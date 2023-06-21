import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./AddToCart.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartItem from "./CartItem";
import { addProduct } from "../redux/cartSlice";

function AddToCart({ product, qty, setCount }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // const toggleShow = () => setShow((state) => !state);

  function handleSubmit() {
    dispatch(addProduct({ product: product, qty: qty }));
    setShow((state) => !state);
    setCount(1);
  }

  return (
    <div>
      <button onClick={handleSubmit} className="add-to-cart btn btn-outline-dark py-2">
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
          <CartItem />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default AddToCart;
