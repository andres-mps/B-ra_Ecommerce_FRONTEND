import "./Home.css";
import axios from "axios";
import Product from "../components/Product";
import { useEffect, useState } from "react";

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
      <section className="container-fluid p-0 mb-3">
        <div className="hero-section">
          <img className="hero-img" src="/public/img/home/header_home.webp" alt="hero image" />
          <div className="hero-content">
            <h1>Want it Hoppy?</h1>
            <p>Come explore our Hoppy styles</p>
          </div>
        </div>
        <div className="row hero-stats">
          <div className="col-sm-6 col-md-3">
            <p>Brewed in Denmark 🇩🇰</p>
          </div>
          <div className="col-sm-6 col-md-3">
            <p>High-quality ingredients 🍻</p>
          </div>
          <div className="col-sm-6 col-md-3">
            <p>Fast and reliable shipping 🚀</p>
          </div>
          <div className="col-sm-6 col-md-3">
            <p>4.7 rating on Trustpilot ✅</p>
          </div>
        </div>
      </section>
      <section id="featured_products" className="container-fluid">
        {products &&
          products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
      </section>
    </main>
  );
}

export default Home;
