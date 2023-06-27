import QuantityCounter from "./QuantityCounter";
import "./CartItem.css";
import { useDispatch } from 'react-redux';
import { removeProduct } from '../redux/cartSlice';
function CartItem({ product }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeProduct(product.id));
  };
  return (
    product && (
      <div className="row border-top pt-3 pe-0 ps-0 mb-3">
        <div className="col-4 d-flex justify-content-center">
          <img src={`http://localhost:3000/img/${product.image}`} alt={product.slug} width={100} />
        </div>
        <div className="col-6">
          <h4 className="title-product">{product.name}</h4>
          <p className="price-cart">{product.price}</p>
          <QuantityCounter qty={product.qty} id={product.id} product={product} />
        </div>
<div className="col-2 d-flex flex-column">
  <h3 className="price-cart mb-auto">{Math.round(product.price * product.qty * 100) / 100} USD</h3>
  <i className="bi bi-trash mt-auto" onClick={handleRemove}></i>
</div>
      </div>
    )
  );
}

export default CartItem;
