import QuantityCounter from "./QuantityCounter";
import "./CartItem.css";

function CartItem({ product }) {
  return (
    product && (
      <div className="row border-top pt-3 pe-0 ps-0">
        <div className="col-4 d-flex justify-content-center">
          <img src={`http://localhost:3000/img/${product.image}`} alt={product.slug} width={100} />
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
    )
  );
}

export default CartItem;
