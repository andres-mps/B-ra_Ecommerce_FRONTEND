import "./Home.css";
import Product from "../components/Product";

function Home() {
  return (
    <main>
      <section className="container-fluid">
        <div className="hero-section">
          <img className="hero-img" src="/public/img/home/header_home.webp" alt="hero image" />
          <div className="hero-content">
            <h1>Want it Hoppy?</h1>
            <p>Come explore our Hoppy styles</p>
          </div>
        </div>
        <div className="hero-stats"></div>
      </section>
      <section id="featured_products" className="container-fluid">
        <div className="row">
          <Product />
        </div>
      </section>
    </main>
  );
}

export default Home;
