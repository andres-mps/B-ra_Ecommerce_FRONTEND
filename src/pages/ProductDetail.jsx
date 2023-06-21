import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../components/Product";
import AddToCart from "../components/AddToCart";
import { NavLink, useParams } from "react-router-dom";
import "./ProductDetail.css";
import QuantityCounter from "../components/QuantityCounter";

function ProductDetail() {
  const [count, setCount] = useState(1);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const [featured, setFeatured] = useState([]);
  const [product, setProduct] = useState("");
  const params = useParams();

  useEffect(() => {
    async function getProductInfo() {
      const response = await axios({
        method: "GET",
        url: `http://localhost:3000/products/${params.product}`,
      });
      setProduct(response.data);
      const featured = await axios({
        method: "GET",
        url: `http://localhost:3000/products/featured`,
      });
      setFeatured(featured.data);
    }
    window.scrollTo(0, 0);
    getProductInfo();
  }, [params]);

  return (
    product && (
      <>
        <section id="main-product-container" className="container-fluid p-3 m-0">
          <div id="main-row" className="row">
            <div className="col-12 col-md-7">
              <div className="product-detail-img-container">
                <NavLink to="/home">
                  {/* Botón "BACK" vista desktop  */}
                  <button className="back-button  d-none d-xl-inline-block btn btn-dark py-2">
                    <i className="bi bi-arrow-left"></i> Back
                  </button>
                  {/* Botón "BACK" vista mobile  */}
                  <button className="d-xl-none back-button btn btn-dark py-2">
                    <i className="bi bi-arrow-left"></i>
                  </button>
                </NavLink>
                <img className="product-detail-img" src={product.image} alt="" />
              </div>
            </div>

            <div className="col-12 col-md-5">
              <h2>To Øl</h2>
              <div className="product-title my-4">
                <h1>{product.name}</h1>
              </div>
              <span className="product-price ">{product.price} USD</span>
              <div className="product-form-buttons">
                <div className="d-flex align-items-center">
                  <div className="d-flex align-items-center justify-content-between border border-dark w-100">
                    <button className="btn" onClick={decrement}>
                      -
                    </button>
                    <p className="mt-3">{count}</p>
                    <button className="btn" onClick={increment}>
                      +
                    </button>
                  </div>
                  <i className="bi bi-trash ms-2"></i>
                </div>
                <AddToCart product={product} qty={count} setCount={setCount} />
              </div>
              <div className="product-description-container">
                <p className="product-description">{product.description}</p>
              </div>
              <div className="product-info-line">
                <span id="product-info-name">SIZE</span>
                <span>{product.size}</span>
              </div>
              <div className="product-info-line">
                <span id="product-info-name">ABV</span>
                <span>{product.abv}</span>
              </div>
              <div className="product-info-line">
                <span id="product-info-name">STYLE</span>
                <span>{product.category.name}</span>
              </div>
              <div className="product-info-line colors">
                <span id="product-info-name" className="color-label">
                  COLOR
                </span>
                <div className="product-info-color-circles">
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
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* featured products */}
        <section id="featured-products" className="container-fluid d-flex flex-row  my-5">
          <div className="row ">
            <h2 className="featured-products-heading text-center">You may also like</h2>
            {featured &&
              featured.map((product) => {
                return <Product key={product.id} product={product} />;
              })}
          </div>
        </section>
      </>
    )
  );
}

export default ProductDetail;
