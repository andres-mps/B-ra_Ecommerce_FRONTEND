import { useDispatch, useSelector } from "react-redux";
import "./AddToCart.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartItem from "./CartItem";
import { addProduct, openCart, closeCart } from "../redux/cartSlice";

function AddToCart({ product, qty, setCount }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  function handleClose() {
    dispatch(closeCart(false));
  }

  function handleSubmit() {
    dispatch(addProduct({ product: product, qty: qty }));
    dispatch(openCart(true));
    setCount(1);
  }

  return (
    <div>
      <button onClick={handleSubmit} className="add-to-cart btn btn-outline-dark py-2">
        Add to cart
      </button>
      <Offcanvas
        show={cart.isOpen}
        onHide={handleClose}
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
          <CartItem />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default AddToCart;
