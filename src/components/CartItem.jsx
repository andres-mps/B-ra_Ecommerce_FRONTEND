import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import QuantityCounter from "./QuantityCounter";
import "./CartItem.css";

function CartItem() {
  const cart = useSelector((state) => state.cart);
  const products = cart.products;

  return (
    <div className="cart">
      <div className="row overflow-auto" style={{ maxHeight: "420px" }}>
        {products.map((product) => {
          return (
            <div className="row border-top pt-3 pe-0 ps-0">
              <div className="col-4 d-flex justify-content-center">
                <img
                  src={`http://localhost:3000/img/${product.image}`}
                  alt={product.slug}
                  width={100}
                />
              </div>
              <div className="col-6">
                <h4 className="tittle-product">{product.name}</h4>
                <p className="price-cart">{product.price}</p>
                <QuantityCounter qty={product.qty} id={product.id} />
              </div>
              <div className="col-2 d-flex align-items-center justify-content-end">
                <h3 className="price-cart">{product.price * product.qty} USD</h3>
              </div>
            </div>
          );
        })}
      </div>

      <div className="row border-top pt-2">
        {/* <div className="col-4">
          <img src="../public/img/cart_alcohol_alert_x250.webp" width={150} alt="" />
        </div> */}

        <div className="col-12">
          <div className="row">
            <div className="d-flex justify-content-between price-cart">
              <h5>Subtotal</h5>
              <p></p>
            </div>
          </div>
          <div className="row">
            <div className="d-flex justify-content-between price-cart">
              <h5>Iva</h5>
              <p>-</p>
            </div>
          </div>
          <div className="row">
            <div className="d-flex justify-content-between price-cart">
              <h3>Total</h3>
              <h3> USD</h3>
            </div>
          </div>
          <div className="row price-cart">
            <p className="price-cart-p"> Shipping calculated at checkout</p>
            <NavLink to="/checkout">
              <button className="check-out btn btn-outline-dark py-2">Check out</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
