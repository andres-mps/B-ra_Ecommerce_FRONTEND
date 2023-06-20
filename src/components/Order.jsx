import React from "react";

function Order({ order }) {
  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <h5 className="card-title bold-font">Numero de orden: {order.id}</h5>
                  <div>Fecha de creación: {order.createdAt}</div>
                </div>
                <div className="col-md-6 text-md-right">
                  <div className="bold-font">Total: ${order.totalAmount}</div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            {order.products.map((product, index) => (
              <div key={index} className="col-md-6 mb-3">
                <div className="row">
                  <div className="col-md-4">
                    <img src={product["product.image"]} alt="Producto" className="img-fluid" />
                  </div>
                  <div className="col-md-8">
                    <div className="bold-font">{product["product.name"]}</div>
                    <div className="font">{product["product.description"]}</div>
                    <div className="light-font">Precio unitario: ${product.price}</div>
                    <div className="light-font">Cant: {product.qty}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
