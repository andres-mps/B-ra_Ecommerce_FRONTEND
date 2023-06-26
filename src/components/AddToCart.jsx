import { useDispatch, useSelector } from "react-redux";
import { addProduct, openCart, closeCart } from "../redux/cartSlice";
import "./AddToCart.css";
import { useState, useEffect } from "react";

function AddToCart({ product, qty, setCount, hasStock }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  function handleSubmit() {
    dispatch(addProduct({ product: product, qty: qty }));
    dispatch(openCart(true));
    setCount(1);
  }

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isLoading]);

  return hasStock ? (
    <div>
      {cart.products.some(
        (cartProduct) => cartProduct.id === product.id && cartProduct.qty >= cartProduct.stock,
      ) ? (
        <button className="add-to-cart btn btn-outline-dark py-2">No stock to add</button>
      ) : (
        <div>
          {product.qty >= product.stock ? (
            <button className="add-to-cart btn btn-outline-dark py-2">No stock to add</button>
          ) : (
            <div>
              <button onClick={handleSubmit} className="add-to-cart btn btn-outline-dark py-2">
                Add to cart
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  ) : (
    <div>
      {isLoading ? (
        <button className="add-to-cart btn btn-outline-dark py-2">Thanks! Check your email</button>
      ) : (
        <button
          className="add-to-cart btn btn-outline-dark py-2"
          onClick={() => setIsLoading(true)}
        >
          Notify me!
        </button>
      )}
    </div>
  );
}

export default AddToCart;
