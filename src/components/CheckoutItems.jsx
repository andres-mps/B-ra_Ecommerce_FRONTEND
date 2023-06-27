import { NavLink } from "react-router-dom";
function CheckoutItems({ product }) {
  return (
    <>
      <div className="checkout-items-container">
        <div className="d-flex align-items-center gap-3">
          <div className="checkout-product-photo-container">
            <img
              src={`${import.meta.env.VITE_APP_BACK_IMG + product.image.main}`}
              alt=""
              className="checkout-product-photo"
            />
            <span className="checkout-product-span">{product.qty}</span>
          </div>
          <NavLink to={`/beers/${product.slug}`} className="text-decoration-none text-black">
            <p className="checkout-regular-text fw-bold checkout-product-name">{product.name}</p>
          </NavLink>
        </div>
        <div className="d-flex gap-1">
          <p>kr</p>
          <p>{product.price}</p>
        </div>
      </div>
    </>
  );
}
export default CheckoutItems;
