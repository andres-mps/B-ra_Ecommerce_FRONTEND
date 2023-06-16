import React, { useState } from "react";
import "./QuantityCounter.css";

function QuantityCounter({ updateQuantity }) {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
    updateQuantity(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      updateQuantity(count - 1);
    }
  };

  return (
    <div className="d-flex align-items-center">
      <div className="d-flex align-items-center justify-content-between border border-dark w-100">
        <button className="btn" onClick={decrement}>
          -
        </button>
        <p className="mt-3">{count}</p>
        <button className="btn" onClick={increment}>
          +
        </button>
      </div>
      <i className="bi bi-trash ms-2"></i>
    </div>
  );
}
export default QuantityCounter;
