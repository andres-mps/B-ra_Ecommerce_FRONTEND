import React, { useState } from "react";
import QuantityCounter from "./QuantityCounter";

function CartItem() {
  const [quantity1, setQuantity1] = useState(0);
  const [quantity2, setQuantity2] = useState(0);

  const updateQuantity1 = (newQuantity) => {
    setQuantity1(newQuantity);
  };

  const updateQuantity2 = (newQuantity) => {
    setQuantity2(newQuantity);
  };

  const precioUnitario1 = 45;
  const precioUnitario2 = 36;

  const calculateTotal = () => {
    const subtotal1 = precioUnitario1 * quantity1;
    const subtotal2 = precioUnitario2 * quantity2;
    return subtotal1 + subtotal2;
  };

  const total = calculateTotal();

  return (
<>
    <div className="container overflow-auto" style={{ maxHeight: "400px" }}>
      <p>PRODUCT</p>
      <div className="row border-top">
        <div className="col-4">
          <img src="./img/products/Action-Directe_44cl_can.webp" alt="" width={100} />
        </div>
        <div className="col-4">
          <h4>Action Direct</h4>
          <p>{precioUnitario1}</p>
          <QuantityCounter updateQuantity={updateQuantity1} />
        </div>
        <div className="col-4 d-flex align-items-center justify-content-end">
          <h3>{precioUnitario1 * quantity1}kr</h3>
        </div>
      </div>

      <div className="row border-top">
        <div className="col-4">
          <img src="./img/products/TroubleJuice-44cl.webp" alt="" width={100} />
        </div>
        <div className="col-4">
          <h4>Trouble Juice</h4>
          <p>{precioUnitario2}</p>
          <QuantityCounter updateQuantity={updateQuantity2} />
        </div>
        <div className="col-4 d-flex align-items-center justify-content-end">
          <h3>{precioUnitario2 * quantity2}kr</h3>
        </div>
      </div>
    </div>

      <div className="col-12 border-top">
        <div className="row">
          <div className="col-6">Subtotal</div>
          <div className="col-6">{total - total*0.22},00DKK </div>
        </div>
        <div className="row">
          <div className="col-6">IVA (%22)</div>
          <div className="col-6">{total*0.22},00DKK </div>
        </div>
        <div className="row justify-content-between align-items-center">
          <div className="col-6">
            <h3>Cart Total</h3>
          </div>
          <div className="col-6">
            <h3>{total},00DKK</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
