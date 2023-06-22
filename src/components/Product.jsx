import { NavLink } from "react-router-dom";
import AddToCart from "./AddToCart";
import "./Product.css";

function Product({ product }) {
  const hasStock = product.stock;
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="product-container d-flex flex-column ">
        <NavLink
          className="text-decoration-none text-black d-flex flex-column text-center"
          to={`/beers/${product.slug}`}
        >
          <div className="product-imgContainer">
            <img
              className="product-img"
              src={`http://localhost:3000/img/${product.image}`}
              alt={product.name}
            />
            {!hasStock && <span className="product-sold-out">Sold out</span>}
          </div>
          <span className="product-name">{product.name}</span>
          <span id="product-price">{product.price} USD</span>
        </NavLink>
        <AddToCart product={product} qty={1} hasStock={hasStock} />
      </div>
    </div>
  );
}

export default Product;
