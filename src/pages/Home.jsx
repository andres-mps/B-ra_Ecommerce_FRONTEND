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
      <section>
        <div className="row">
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img
              src="../../public/img/home/home_destilery_img.webp"
              alt="Imagen"
              className="img-fluid object-fit-cover"
            />
          </div>
          <div className="col-md-6 d-md-flex flex-md-column justify-content-md-center">
            <div className="text-center font-extended">
              <h2>Craft beer to the people</h2>
              <p>
                Starting out as a home brewing project back in 2005, To Øl was permanently
                established in 2010 working as a gypsy brewery lending in on other breweries spare
                capacity for the following decade. In 2019 we took over a former food factory in the
                Western part of Zealand, Denmark, where we’re setting up a full-blown specially
                designed brewery and craft beverage hub. To Øl City is the name of the place.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
