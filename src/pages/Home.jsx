import "./Home.css";
import axios from "axios";
import Product from "../components/Product";
import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

function Home() {
  const [dragging, setDragging] = useState(false);
  const [startXPosition, setStartXPosition] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const marqueeRef = useRef(null);

  const handleMouseDown = (e) => {
    setDragging(true);
    setStartXPosition(e.clientX);
    setScrollLeft(marqueeRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    e.preventDefault();
    const x = e.clientX;
    const dragOffset = x - startXPosition;
    marqueeRef.current.scrollLeft = scrollLeft - dragOffset;
  };

  const handleMouseLeave = () => {
    if (dragging) setDragging(false);
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setDragging(true);
    setStartXPosition(touch.clientX);
    setScrollLeft(marqueeRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!dragging) return;
    e.preventDefault();
    const touch = e.touches[0];
    const x = touch.clientX;
    const dragOffset = x - startXPosition;
    marqueeRef.current.scrollLeft = scrollLeft - dragOffset;
  };

  const handleTouchEnd = () => {
    setDragging(false);
  };

  const [products, setProducts] = useState([]);
  const [hoveredImage, setHoveredImage] = useState(
    `${import.meta.env.VITE_APP_BACK_IMG}home_stylesList.webp`,
  );
  const [hoveredCategory, setHoveredCategory] = useState(null);
  useEffect(() => {
    async function getProductInfo() {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_APP_BACK}/products/featured`,
      });
      setProducts(response.data);
    }
    getProductInfo();
  }, []);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function getCategories() {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_APP_BACK}/categories`,
      });
      setCategories(response.data);
    }
    getCategories();
  }, []);

  const handleHover = (categoryName, categoryImage) => {
    setHoveredImage(`${import.meta.env.VITE_APP_BACK_IMG + categoryImage}`);
    setHoveredCategory(categoryName);
  };

  return (
    <main>
      <section className="home-section">
        <NavLink to="/styles/ipa">
          <div className="hero-container">
            <div className="background-image"></div>
            <div className="background-overlay"></div>
            <div className="hero-content">
              <h1>Want it Hoppy?</h1>
              <h4>Shop now!</h4>
            </div>
          </div>
        </NavLink>
        <div className="row hero-stats">
          <div className="d-none d-md-block col-md-6 col-lg-3">
            <p>Brewed in Uruguay 🇺🇾</p>
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
        <div
          className="row align-items-end"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="col p-0">
            <Marquee
              pauseOnHover={true}
              speed={100}
              loop={0}
              delay={0}
              autoFill={true}
              gradientWidth={0}
              gradientColor={[0, 0, 0, 0]}
              ref={marqueeRef}
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
        </div>
      </section>
      <section className="section-container">
        <div className="row">
          <div className="col-md-6 order-md-1 home-images-container">
            <img
              src={`${import.meta.env.VITE_APP_BACK_IMG + "home_destilery_img.webp"}`}
              alt="brewery-image"
              className="home-images"
            />
          </div>
          <div className="col-md-6 order-md-2 home-text-box">
            <div>
              <h2 className="home-subtitles">Craft beer to the people</h2>
              <p className="home-text">
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
          <div className="col-md-6 order-md-2 home-images-container">
            <img
              src={`${import.meta.env.VITE_APP_BACK_IMG + "beer_club_box.webp"}`}
              alt="Imagen"
              className="home-images"
            />
          </div>
          <div className="col-md-6 order-md-1 home-text-box">
            <div className="text-left">
              <h2 className="home-subtitles">To Øl Beer Club</h2>
              <p className="home-text">
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
          <div className="col-md-6 order-md-1 home-images-container">
            <img src={hoveredImage} alt="Imagen" className="home-images" />
          </div>
          <div className="col-md-6 order-md-2 home-text-box">
            <div className="text-left">
              <h2 className="home-subtitles">We got the goods</h2>
              <div>
                <div className="home-style-list">
                  {categories &&
                    categories.map((category) => {
                      return (
                        <div
                          id="style-list"
                          key={category.id}
                          onMouseEnter={() => handleHover(category.name, category.image)}
                        >
                          <NavLink to={`/styles/${category.slug}`} id="style-list-link">
                            <span className="hover-underline-subheading">{category.name}</span>
                            <span className="hover-underline-subheading">
                              {category.products.length}
                            </span>
                          </NavLink>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
