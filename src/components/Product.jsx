import React from "react";
import "./Product.css";
import { NavLink } from "react-router-dom";

function Product() {
  return (
    <>
      <div className="col-6 col-md-3">
        <div className="d-flex flex-column text-center">
          <img src="/public/img/products/Action-Directe_44cl_can.webp" alt="" />
          <span className="productName">Action Direct</span>
          <span className="productPrice">52.00 USD</span>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <div className="d-flex flex-column text-center">
          <img src="/public/img/products/TroubleJuice-44cl.webp" alt="" />
          <p className="productName">Trouble Juice</p>
          <p className="productPrice">45.00 USD</p>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <div className="d-flex flex-column text-center">
          <img src="/public/img/products/brokilde-brown.webp" alt="" />
          <p className="productName">Brokilde Brown</p>
          <p className="productPrice">41.60 USD</p>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <div className="d-flex flex-column text-center">
          <img src="/public/img/products/sovs.webp" alt="" />
          <p className="productName">Sovs</p>
          <p className="productPrice">47.30 USD</p>
        </div>
      </div>
      <NavLink>Add to cart</NavLink>
    </>
  );
}

export default Product;
