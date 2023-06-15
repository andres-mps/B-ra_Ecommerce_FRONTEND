import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../components/Product";
import AddToCart from "../components/AddToCart";
import { NavLink } from "react-router-dom";
import "./ProductDetail.css";

function ProductDetail() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProductInfo() {
      const response = await axios({
        method: "GET",
        url: `http://localhost:3000/products/featured`,
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      });
      setProducts(response.data);
      //console.log(response.data);
    }
    window.scrollTo(0, 0);
    getProductInfo();
  }, []);

  return (
    <>
      <section id="main-product-container" className="container p-3 ">
        <div id="main-row" className="row">
          <div className="col-12 col-md-7">
            <div className="product-img-container d-flex flex-column">
              <NavLink to="/">
                <button className="back-button btn btn-dark py-2">
                  <i className="bi bi-arrow-left"></i> Back
                </button>
              </NavLink>
              <img
                className="product-img"
                src="/public/img/products/TroubleJuice-44cl.webp"
                alt=""
              />
            </div>
          </div>

          <div className="col-12 col-md-5">
            <h2>To Øl</h2>
            <div className="product-title my-4">
              <h1>Trouble Juice</h1>
            </div>
            <span className="product-price ">37.00 USD</span>
            <div className="product-form-buttons">
              <AddToCart />
              <AddToCart />
            </div>
            <div className="product-description-container">
              <p className="product-description">
                This is a beer designed with the Norwegian market in mind. It is a slightly fruity
                session IPA, reminiscent of Snublejuice and featuring apricot (with a touch of
                pineapple to boost the experience). It features some extra fruity hops - El Dorado,
                Simcoe, Cascade, and Ekuanot, and is meant to be mostly bright.
              </p>
            </div>
            <div className="product-info-line">
              <span id="product-info-name">SIZE</span>
              <span>44 CL</span>
            </div>
            <div className="product-info-line">
              <span id="product-info-name">ABV</span>
              <span>4.7%</span>
            </div>
            <div className="product-info-line">
              <span id="product-info-name">STYLE</span>
              <span>IPA</span>
            </div>
            <div className="product-info-line colors">
              <span id="product-info-name" className="color-label">
                COLOR
              </span>
              {/* <div className="product-info-color-circles">
                <span style={{ background: "#E2B461" }}></span>
                <span style={{ background: "#D59450" }}></span>
                <span style={{ background: "#C67641" }}></span>
                <span style={{ background: "#B65731" }}></span>
                <span style={{ background: "#A74126" }}></span>
                <span style={{ background: "#98311E" }}></span>
                <span style={{ background: "#872619" }}></span>
                <span style={{ background: "#741D15" }}></span>
                <span style={{ background: "#611913" }}></span>
                <span style={{ background: "#531612" }}></span>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* featured products */}
      <section id="featured-products" className="container-fluid d-flex flex-row  my-5">
        <div className="row ">
          <h2 className="featured-products-heading text-center">You may also like</h2>
          {products &&
            products.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
        </div>
      </section>
    </>
  );
}

export default ProductDetail;
