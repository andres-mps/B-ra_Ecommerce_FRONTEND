import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Product from "../components/Product";
import AddToCart from "../components/AddToCart";
import { NavLink, useParams } from "react-router-dom";
import "./ProductDetail.css";
import { motion } from "framer-motion";

function ProductDetail() {
  const [featured, setFeatured] = useState([]);
  const [product, setProduct] = useState("");
  const [imgToBox, setImgToBox] = useState("main");
  const params = useParams();
  const productsInCart = useSelector((state) => state.cart.products);
  const selectedProduct = productsInCart.find((productInCart) => productInCart.id === product.id);

  const [count, setCount] = useState(1);
  const increment = () => {
    if (count < product.stock - (selectedProduct === undefined ? 0 : selectedProduct.qty)) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    setImgToBox("main");

    async function getProductInfo() {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_APP_BACK}/products/${params.product}`,
      });
      setProduct(response.data);
      const featured = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_APP_BACK}/products/featured`,
      });
      setFeatured(featured.data);
    }
    window.scrollTo(0, 0);
    getProductInfo();
  }, [params]);

  const limitFeatured = featured.slice(0, 4);

  console.log(imgToBox);

  return (
    product && (
      <>
        <motion.section
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          id="main-product-container"
          className="container-fluid p-3 m-0"
        >
          <div id="main-row" className="row">
            <div className="col-12 col-md-6">
              <div className="product-detail-img-container">
                <NavLink to="/styles">
                  {/* Botón "BACK" vista desktop  */}
                  <button className="back-button  d-none d-xl-inline-block btn btn-dark py-2">
                    <i className="bi bi-arrow-left"></i> Back
                  </button>
                  {/* Botón "BACK" vista mobile  */}
                  <button className="d-xl-none back-button btn btn-dark py-2">
                    <i className="bi bi-arrow-left"></i>
                  </button>
                </NavLink>
                <div className="big-img-container">
                  <motion.img
                    drag
                    dragConstraints={{
                      top: -50,
                      left: -50,
                      right: 50,
                      bottom: 50,
                    }}
                    className="product-detail-img rounded"
                    src={import.meta.env.VITE_APP_BACK_IMG + product.image[imgToBox]}
                    alt=""
                  />
                </div>
                {product.image.alt && (
                  <div className="thumbnails-container">
                    <div
                      className={`thumbnail ${
                        imgToBox === "main" ? "thumbnail-container-border" : ""
                      }`}
                    >
                      {" "}
                      <img
                        onClick={() => setImgToBox("main")}
                        src={`${import.meta.env.VITE_APP_BACK_IMG + product.image.main}`}
                        alt=""
                      />
                    </div>
                    <div
                      className={`thumbnail ${
                        imgToBox === "alt" ? "thumbnail-container-border" : ""
                      }`}
                    >
                      <img
                        onClick={() => setImgToBox("alt")}
                        src={`${import.meta.env.VITE_APP_BACK_IMG + product.image.alt}`}
                        alt=""
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="col-12 col-md-6" style={{ paddingRight: "2rem" }}>
              <h2>To Øl</h2>
              <div className="product-title my-4">
                <h1>{product.name}</h1>
              </div>
              <span className="product-price ">{product.price} USD</span>
              <div className="product-form-buttons">
                <div id="counter-button">
                  <button id="decrement-button" onClick={decrement}>
                    -
                  </button>
                  <p className="m-0">{count}</p>
                  <button id="increment-button" onClick={increment}>
                    +
                  </button>
                </div>

                <AddToCart
                  product={product}
                  qty={count}
                  setCount={setCount}
                  hasStock={product.stock}
                />
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
        </motion.section>

        {/* featured products */}
        <section id="featured-products" className="container-fluid d-flex flex-row  my-5">
          <div className="row ">
            <h2 className="featured-products-heading text-center">You may also like</h2>
            {featured &&
              limitFeatured.map((product) => {
                return (
                  <div className="col-6 col-md-4 col-lg-3">
                    <Product key={product.id} product={product} />
                  </div>
                );
              })}
          </div>
        </section>
      </>
    )
  );
}

export default ProductDetail;
