import { useDispatch } from "react-redux";
import { removeProduct, incrementQuantity, decrementQuantity } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import "./QuantityCounter.css";

function QuantityCounter({ qty, id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const increment = () => {
    dispatch(incrementQuantity(id));
  };

  const decrement = () => {
    if (qty > 0) {
      dispatch(decrementQuantity(id));
    }
  };

  function handleRemove() {
    dispatch(removeProduct(id));
    navigate(-1);
  }

  return (
    <div className="d-flex align-items-center">
      <div className="d-flex align-items-center justify-content-between border border-dark w-100">
        <button className="btn" onClick={decrement}>
          -
        </button>
        <p className="mt-3">{qty}</p>
        <button className="btn" onClick={increment}>
          +
        </button>
      </div>
      <i className="bi bi-trash ms-2" onClick={handleRemove}></i>
    </div>
  );
}
export default QuantityCounter;
