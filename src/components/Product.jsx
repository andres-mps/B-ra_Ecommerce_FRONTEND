import React from "react";
import "./Product.css";
import { NavLink } from "react-router-dom";
import AddToCart from "./AddToCart";

function Product({ product }) {
  return (
    <div className="col-6 col-md-4 col-lg-3">
      <NavLink className="text-decoration-none text-black" to={`/beers/${product.slug}`}>
        <div className="product-container d-flex flex-column text-center">
          <div className="imgContainer">
            <img className="product-img" src={product.image} alt={product.name} />
          </div>
          <span className="product-name">{product.name}</span>
          <span className="product-price">{product.price} USD</span>
          <AddToCart />
        </div>
      </NavLink>
    </div>
  );
}

export default Product;
