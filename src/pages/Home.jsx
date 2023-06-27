import "./Home.css";
import axios from "axios";
import Product from "../components/Product";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

function Home() {
  const [products, setProducts] = useState([]);
  const [hoveredImage, setHoveredImage] = useState(
    "http://localhost:5174/public/img/home/home_stylesList.webp",
  );
  const [hoveredCategory, setHoveredCategory] = useState(null);
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

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function getCategories() {
      const response = await axios({
        method: "GET",
        url: `http://localhost:3000/categories`,
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      });
      setCategories(response.data);
      //console.log(response.data);
    }
    getCategories();
  }, []);

  const handleHover = (categoryName, categoryImage) => {
    setHoveredImage(`http://localhost:5174/img/home/${categoryImage}`);
    setHoveredCategory(categoryName);
  };

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
      <section id="featured-products" className="container-fluid mt-5 mb-3">
        <h2 className="featured-products-heading text-center">Featured Beers</h2>
        <div className="row align-items-end">
          <Marquee
            pauseOnHover={true}
            pauseOnClick={true}
            speed={100}
            loop={0}
            delay={0}
            autoFill={true}
          >
            {products &&
              products.map((product) => {
                return (
                  <div className="col-6 col-md-4 col-lg-3 product-first-container">
                    <Product key={product.id} product={product} />
                  </div>
                );
              })}
          </Marquee>
        </div>
      </section>
      <section>
        <div className="row">
          <div
            className="col-md-6 d-flex align-items-center justify-content-center order-md-1"
            style={{ padding: "0px" }}
          >
            <img
              src="../../public/img/home/home_destilery_img.webp"
              alt="Imagen"
              className="object-fit-cover"
              style={{ minHeight: "100%", minWidth: "100%" }}
            />
          </div>
          <div
            className="col-md-6 d-md-flex flex-md-column justify-content-md-center order-md-2"
            style={{
              paddingRight: "100px",
              paddingLeft: "100px",
              paddingTop: "30px",
              paddingBottom: "30px",
            }}
          >
            <div className="text-left">
              <h2
                style={{
                  fontFamily: "var(--font-heading-bold)",
                  fontSize: "40px",
                  paddingBottom: "20px",
                  textAlign: "left",
                }}
              >
                Craft beer to the people
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-heading-light)",
                  opacity: 0.9,
                  lineHeight: "1.6",
                  fontSize: "1rem",
                  fontWeight: "lighter",
                  letterSpacing: "3px",
                }}
              >
                Starting out as a home brewing project back in 2005, To Øl was permanently
                established in 2010 working as a gypsy brewery lending in on other breweries spare
                capacity for the following decade. In 2019 we took over a former food factory in the
                Western part of Zealand, Denmark, where we’re setting up a full-blown specially
                designed brewery and craft beverage hub. To Øl City is the name of the place.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-md-6 d-flex align-items-center justify-content-center order-md-2"
            style={{ padding: "0px" }}
          >
            <img
              src="../../public/img/home/beer_club_box.webp"
              alt="Imagen"
              className="object-fit-cover"
              style={{ maxWidth: "100%", minWidth: "100%" }}
            />
          </div>
          <div
            className="col-md-6 d-md-flex flex-md-column justify-content-md-center order-md-1"
            style={{
              paddingRight: "100px",
              paddingLeft: "100px",
              paddingTop: "30px",
              paddingBottom: "30px",
            }}
          >
            <div className="text-left">
              <h2
                style={{
                  fontFamily: "var(--font-heading-bold)",
                  fontSize: "40px",
                  paddingBottom: "20px",
                  textAlign: "left",
                }}
              >
                To Øl Beer Club
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-heading-light)",
                  opacity: 0.9,
                  lineHeight: "1.6",
                  fontSize: "1rem",
                  fontWeight: "lighter",
                  letterSpacing: "3px",
                }}
              >
                Be a part of To Øl’s monthly beer club! A club for eager hop heads, curious beer
                enthusiasts and everything in between. Every month you get a box with 6 carefully
                selected beers, freshly brewed and packed by us. <br />
                <br /> We will introduce and guide you through each beer in our monthly digital beer
                Zine.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-md-6 d-flex align-items-center justify-content-center order-md-1"
            style={{ padding: "0px" }}
          >
            <img
              src={hoveredImage}
              alt="Imagen"
              className="object-fit-cover"
              style={{ minHeight: "100%", minWidth: "100%" }}
            />
          </div>
          <div
            className="col-md-6 d-md-flex flex-md-column justify-content-md-center order-md-2"
            style={{
              paddingRight: "100px",
              paddingLeft: "100px",
              marginTop: "30px",
              marginBottom: "30px",
            }}
          >
            <div className="text-left">
              <h2
                style={{
                  fontFamily: "var(--font-heading-bold)",
                  fontSize: "2rem",
                  paddingBottom: "20px",
                  textAlign: "left",
                }}
              >
                We got the goods
              </h2>
              <div
                style={{
                  fontFamily: "var(--font-body-family: Regular, Helvetica)",
                  fontSize: "17px",
                }}
              >
                <table style={{ width: "100%", fontSize: "25px" }}>
                  <tbody>
                    {categories &&
                      categories.map((category) => {
                        return (
                          <tr
                            id="style-list"
                            key={category.id}
                            onMouseEnter={() => handleHover(category.name, category.image)}
                            onMouseLeave={() => setHoveredImage(defaultImage)}
                          >
                            <NavLink to={`/styles/${category.slug}`} id="style-list-link">
                              <td id="style-name">{category.name}</td>
                              <td id="style-amount">{category.products.length}</td>
                            </NavLink>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
