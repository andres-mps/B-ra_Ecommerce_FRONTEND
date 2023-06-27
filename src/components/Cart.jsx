import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartItem from "./CartItem";
import "./AddToCart.css";
import { closeCart } from "../redux/cartSlice";

function Cart() {
  const dispatch = useDispatch();

  const productsInCart = useSelector((state) => state.cart.products);
  const isOpen = useSelector((state) => state.cart.isOpen);

  function calcCartSubtotalPrice() {
    const productPrice = productsInCart.map((product) => product.price * product.qty);
    const subtotalPrice = productPrice.reduce((acc, price) => acc + price, 0);
    return Math.round(subtotalPrice * 100) / 100;
  }

  const handleClose = () => {
    dispatch(closeCart(false));
  };

  return (
    <Offcanvas
      show={isOpen}
      onHide={handleClose}
      placement="end"
      className="offcanvas-container custom-offcanvas p-4" 
    >
      <Offcanvas.Header closeButton className="p-0">
        <h2 className="title-cart">Your cart</h2>
      </Offcanvas.Header>

      <div>
        {productsInCart.length > 0 ? (
          <>
            <div className="d-flex justify-content-between mt-3">
              <p className="ms-3 subtitle-cart">PRODUCT</p>
              <p className="me-2 subtitle-cart">PRICE</p>
            </div>
            <Offcanvas.Body>
              <div>
                <div className="row scroll" style={{ maxHeight: "400px" }}>
                  {productsInCart.map((product) => (
                    <CartItem key={product.id} product={product} />
                  ))}
                </div>
                <div className="row border-top pt-2 checkout-info">
                  <div className="col-12">
                    <div className="row">
                      <div className="d-flex justify-content-between price-cart mt-3">
                        <h5>Subtotal</h5>
                        <h5 className="pe-4">{calcCartSubtotalPrice()} USD</h5>
                      </div>
                    </div>
                    <div className="row price-cart">
                      <p className="price-cart-p"> Shipping calculated at checkout</p>
                      <NavLink to="/checkout" className="pe-3">
                        <button
                          className="check-out btn btn-outline-dark py-2"
                          onClick={handleClose}
                        >
                          Check out
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </Offcanvas.Body>
          </>
        ) : (
          <Offcanvas.Body className="mt-3">
            <div className="cart-empty">
              <h3 className="mb-0">Your cart is empty</h3>
              <NavLink to="/styles" onClick={handleClose} className="continue-shopping">
                <h3 className="mb-0">Continue shopping</h3>
              </NavLink>
            </div>
          </Offcanvas.Body>
        )}
      </div>
    </Offcanvas>
  );
}

export default Cart;
