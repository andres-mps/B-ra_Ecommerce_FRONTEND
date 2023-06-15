import "./Home.css";
import axios from "axios";
import Product from "../components/Product";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Home() {
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
    getProductInfo();
  }, []);

  return (
    <main>
      <section>
        <NavLink>
          <div className="hero-container">
            <div className="background-image"></div>
            <div className="background-overlay"></div>
            <div className="hero-content">
              <h1>Want it Hoppy?</h1>
              <p>Come explore our Hoppy styles</p>
            </div>
          </div>
        </NavLink>
        <div className="row hero-stats">
          <div className="d-none d-md-block col-md-6 col-lg-3">
            <p>Brewed in Denmark 🇩🇰</p>
          </div>
          <div className="d-none d-md-block col-md-6 col-lg-3">
            <p>High-quality ingredients 🍻</p>
          </div>
          <div className="d-none d-md-block col-md-6 col-lg-3">
            <p>Fast and reliable shipping 🚀</p>
          </div>
          <div className="d-none d-md-block col-md-6 col-lg-3">
            <p>4.7 rating on Trustpilot ✅</p>
          </div>
        </div>
      </section>
      <section id="featured_products" className="container-fluid d-flex flex-row  my-5">
        <div className="row ">
          <h2 className="featured_products_heading text-center">Featured Beers</h2>
          {products &&
            products.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
        </div>
      </section>
    </main>
  );
}

export default Home;
