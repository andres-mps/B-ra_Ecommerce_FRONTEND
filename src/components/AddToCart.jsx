import { useDispatch, useSelector } from "react-redux";
import { addProduct, openCart, closeCart } from "../redux/cartSlice";
import Cart from "./Cart";
import "./AddToCart.css";

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
      <Cart show={cart.isOpen} onHide={handleClose} />
    </div>
  );
}

export default AddToCart;
