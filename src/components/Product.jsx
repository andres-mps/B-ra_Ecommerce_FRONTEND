import React from "react";
import "./Product.css";
import { NavLink } from "react-router-dom";
import AddToCart from "./AddToCart";

function Product({ product }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="product-container d-flex flex-column ">
        <NavLink
          className="text-decoration-none text-black d-flex flex-column text-center"
          to={`/beers/${product.slug}`}
        >
          <div className="imgContainer">
            <img className="product-img" src={product.image} alt={product.name} />
          </div>
          <span className="product-name">{product.name}</span>
          <span id="product-price">{product.price} USD</span>
        </NavLink>
        <AddToCart />
      </div>
    </div>
  );
}

export default Product;
