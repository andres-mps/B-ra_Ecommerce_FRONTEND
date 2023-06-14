import React from "react";
import "./Product.css";
import { NavLink } from "react-router-dom";

function Product({ product }) {
  return (
    <div className="col-6 col-md-3">
      <div className="productContainer d-flex flex-column text-center">
        <img src={product.image} alt="" />
        <span className="productName">{product.name}</span>
        <span className="productPrice">{product.price} USD</span>
        <NavLink to="#" activeClassName="active">
          <button className="addToCart btn btn-outline-dark py-3">Add to cart</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Product;
