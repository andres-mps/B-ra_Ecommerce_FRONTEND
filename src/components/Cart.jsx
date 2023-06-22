import Offcanvas from "react-bootstrap/Offcanvas";
import CartItem from "./CartItem";
import "./AddToCart.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Cart({ show, onHide }) {
  const cart = useSelector((state) => state.cart);
  const products = cart.products;

  return (
    <Offcanvas
      show={show}
      onHide={onHide}
      placement="end"
      className="offcanvas-container custom-offcanvas container"
    >
      <Offcanvas.Header closeButton>
        <h2 className="tittle-cart">Your cart</h2>
      </Offcanvas.Header>
      <div className="d-flex justify-content-between">
        <p className="ms-3 subtittle-cart">PRODUCT</p>
        <p className="me-3 subtittle-cart">PRICE</p>
      </div>
      <Offcanvas.Body>
        <div className="cart">
          <div className="row overflow-auto" style={{ maxHeight: "420px" }}></div>
          {products.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
          <div className="row border-top pt-2">
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
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default Cart;
