import { NavLink } from "react-router-dom";
function CheckoutItems({ product }) {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex align-items-center gap-3">
          <div className="checkout-product-photo-container">
            <img
              src={`http://localhost:3000/img/${product.image}`}
              alt=""
              className="checkout-product-photo"
            />
            <span className="checkout-product-span">{product.qty}</span>
          </div>
          <NavLink to={`/beers/${product.slug}`} className="text-decoration-none text-black">
            <p className="checkout-regular-text fw-bold">{product.name}</p>
          </NavLink>
        </div>
        <p>kr {product.price}</p>
      </div>
    </>
  );
}
export default CheckoutItems;
