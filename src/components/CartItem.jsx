import React, { useState } from "react";
import QuantityCounter from "./QuantityCounter";
import "./CartItem.css";

function CartItem() {
  const [quantity1, setQuantity1] = useState(0);
  const [quantity2, setQuantity2] = useState(0);
  const [quantity3, setQuantity3] = useState(0);

  const updateQuantity1 = (newQuantity) => {
    setQuantity1(newQuantity);
  };

  const updateQuantity2 = (newQuantity) => {
    setQuantity2(newQuantity);
  };
  const updateQuantity3 = (newQuantity) => {
    setQuantity3(newQuantity);
  };

  const precioUnitario1 = 45;
  const precioUnitario2 = 36;
  const precioUnitario3 = 38;

  const calculateTotal = () => {
    const subtotal1 = precioUnitario1 * quantity1;
    const subtotal2 = precioUnitario2 * quantity2;
    const subtotal3 = precioUnitario3 * quantity3;
    return subtotal1 + subtotal2 + subtotal3;
  };

  const total = calculateTotal();

  return (
    <div className="cart">
      <div className="row overflow-auto" style={{ maxHeight: "420px" }}>
        <div className="row border-top pt-3 pe-0 ps-0">
          <div className="col-4 d-flex justify-content-center">
            <img src="../public/img/products/Action-Directe_44cl_can.webp" alt="" width={100}/>
          </div>
          <div className="col-6">
            <h4 className="tittle-product">Action Direct</h4>
            <p className="price-cart">{precioUnitario1}</p>
            <QuantityCounter updateQuantity={updateQuantity1} />
          </div>
          <div className="col-2 d-flex align-items-center justify-content-end">
            <h3 className="price-cart">{precioUnitario1 * quantity1} USD</h3>
          </div>
        </div>

        <div className="row border-top pt-4 pe-0 ps-0">
          <div className="col-4 d-flex justify-content-center">
            <img src="../public/img/products/TroubleJuice-44cl.webp" alt="" width={100} />
          </div>
          <div className="col-6">
            <h4 className="tittle-product">Trouble Juice</h4>
            <p className="price-cart">{precioUnitario2}</p>
            <QuantityCounter updateQuantity={updateQuantity2} />
          </div>
          <div className="col-2 d-flex align-items-center justify-content-end">
            <h3 className="price-cart">{precioUnitario2 * quantity2} USD</h3>
          </div>
        </div>

        <div className="row border-top pt-4 pe-0 ps-0">
          <div className="col-4 d-flex justify-content-center">
            <img src="../public/img/products/Chitfaced.webp" alt="" width={100} />
          </div>
          <div className="col-6">
            <h4 className="tittle-product">Chit Faced</h4>
            <p className="price-cart">{precioUnitario2}</p>
            <QuantityCounter updateQuantity={updateQuantity3} />
          </div>
          <div className="col-2 d-flex align-items-center justify-content-end">
            <h3 className="price-cart">{precioUnitario3 * quantity3} USD</h3>
          </div>
        </div>
      </div>

      <div className="container row border-top pt-2">
        {/* <div className="col-4">
          <img src="../public/img/cart_alcohol_alert_x250.webp" width={150} alt="" />
        </div> */}

        <div className="col-12">
          <div className="row">
            <div className="d-flex justify-content-between price-cart">
              <h5>Subtotal</h5>
              <p>-</p>
            </div>
          </div>
          <div className="row">
            <div className="d-flex justify-content-between price-cart">
              <h5>Iva</h5>
              <p>-</p>
            </div>
          </div>
          <div className="row">
            <div className="d-flex justify-content-between price-cart">
              <h3>Total</h3>
              <h3>{total} USD</h3>
            </div>
          </div>
          <div className="row price-cart">
            <p className="price-cart-p"> Shipping calculated at checkout</p>
            <button className="check-out btn btn-outline-dark py-2">Check out</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
