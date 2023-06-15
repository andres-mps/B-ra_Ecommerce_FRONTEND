import React from "react";
import "./Product.css";
import { NavLink } from "react-router-dom";
import AddToCart from "./AddToCart";

function Product({ product }) {
  return (
    <div className="col-6 col-md-4 col-lg-3">
      <div className="productContainer d-flex flex-column text-center">
        <div className="imgContainer">
          <img className="productImg" src={product.image} alt={product.name} />
        </div>
        <span className="productName">{product.name}</span>
        <span className="productPrice">{product.price} USD</span>
        <AddToCart product={product}/>
      </div>
      {/* <p className="a">--font-body-family: Helvetica;</p>
      <p className="b">--font-heading: HelveticaEx;</p>
      <p className="c">--font-heading-bold: HelveticaExBd;</p>
      <p className="d">--font-heading-light: HelveticaExLt;</p> */}
    </div>
  );
}

export default Product;
