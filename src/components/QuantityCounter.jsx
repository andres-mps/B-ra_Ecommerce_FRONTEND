import { useDispatch, useSelector } from "react-redux";
import {  incrementQuantity, decrementQuantity } from "../redux/cartSlice";
import "../pages/ProductDetail.css";

function QuantityCounter({ qty, id, product }) {
  const dispatch = useDispatch();

  const increment = () => {
    if (qty < product.stock) {
      dispatch(incrementQuantity(id));
    }
  };

  const decrement = () => {
    if (qty > 0) {
      dispatch(decrementQuantity(id));
    }
  };


  return (
    <div className="d-flex align-items-center">
      <div
        className="d-flex align-items-center justify-content-between border border-dark counter-container"
        id="counter-button"
      >
        <button className="btn" onClick={decrement} id="decrement-button">
          -
        </button>
        <p className="mt-3">{qty}</p>
        <button className="btn" onClick={increment} id="increment-button">
          +
        </button>
      </div>
    </div>
  );
}
export default QuantityCounter;
