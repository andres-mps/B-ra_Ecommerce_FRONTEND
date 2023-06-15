import "./Home.css";
import axios from "axios";
import Product from "../components/Product";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const [hoveredImage, setHoveredImage] = useState(
    "https://cdn.shopify.com/s/files/1/0266/3704/1767/collections/hoppy-beers.jpg?v=1675247646&width=750",
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
        url: `http://localhost:3000/products/categories`,
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
    setHoveredImage(categoryImage);
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
      <section id="featured-products" className="container-fluid d-flex flex-row  my-5">
        <div className="row ">
          <h2 className="featured-products-heading text-center">Featured Beers</h2>
          {products &&
            products.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
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
            style={{ paddingRight: "100px", paddingLeft: "100px" }}
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
                  fontFamily: "var(--font-body-family: Regular, Helvetica)",
                  fontSize: "17px",
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
            className="col-md-6 d-md-flex flex-md-column justify-content-md-center order-md-1"
            style={{ paddingRight: "100px", paddingLeft: "100px" }}
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
                  fontFamily: "var(--font-body-family: Regular, Helvetica)",
                  fontSize: "17px",
                }}
              >
                Be a part of To Øl’s monthly beer club! A club for eager hop heads, curious beer
                enthusiasts and everything in between. Every month you get a box with 6 carefully
                selected beers, freshly brewed and packed by us. We will introduce and guide you
                through each beer in our monthly digital beer Zine.
              </p>
            </div>
          </div>
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
            style={{ paddingRight: "100px", paddingLeft: "100px" }}
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
                            key={category.id}
                            style={{
                              height: "40px",
                              fontWeight: category.name === hoveredCategory ? "bold" : "normal",
                              fontSize: category.name === hoveredCategory ? "30px" : "25px",
                              textDecoration:
                                category.name === hoveredCategory ? "underline" : "25px",
                            }}
                            onMouseEnter={() => handleHover(category.name, category.image)}
                            onMouseLeave={() => setHoveredImage(defaultImage)}
                          >
                            <td>{category.name}</td>
                            <td>35</td>
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
