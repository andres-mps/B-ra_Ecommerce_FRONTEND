import React from "react";
import "./order.css"; 
import { enUS } from "date-fns/locale";
import { format } from "date-fns";

function Order({ order }) {
  return (
    <>
      <div className="order-container pt-3">
        <div className="card container">
          <div className="row">
            <div className="col-4">
              <h5 className="card-title bold-font">Id de la orden: {order.id}</h5>
            </div>
            <div className="col-4">
              <p>Realizada el {format(new Date(order.createdAt), "dd MMM yyyy", { locale: enUS })}</p>
            </div>
            <div className="col-4 text-end bold-font">
              <h5>Total: ${order.totalAmount}</h5>
            </div>
          </div>
          {order.products.map((product, index) => (
            <div key={index} className="card product-card">
              <div className="row">
  <div className="col-md-3 col-sm-12 text-center mb-3 mb-sm-0">
    <img
      src={product["product.image"]}
      alt="Producto"
      className="img-fluid product-image"
      style={{ maxWidth: "150px" }}
    />
  </div>
  <div className="col-md-9 col-sm-12">
    <div className="card-body">
      <h5 className="card-title bold-font">{product["product.name"]}</h5>
      <p className="card-text font">{product["product.description"]}</p>
      <p className="card-text light-font">Precio unitario: ${product.price}</p>
      <p className="card-text light-font">Cant: {product.qty}</p>
    </div>
  </div>
</div>

            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Order;
