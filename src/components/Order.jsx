import React, { useState } from "react";
import "./order.css";
import { Button, Collapse } from "react-bootstrap";
import { enUS } from "date-fns/locale";
import { format } from "date-fns";

function Order({ order }) {
  const [open, setOpen] = useState(false);

  function statusIcons() {
    if (order.status === "Pending") {
      return <i className="bi bi-arrow-clockwise "></i>;
    } else if (order.status === "In progress") {
      return <i className="bi bi-box-arrow-right text-warning"></i>;
    } else {
      return <i className="bi bi-check-circle-fill text-success"></i>;
    }
  }

  return (
    <div className="order-container pt-3 mb-5">
      <div className="card container">
        <Button
          variant="custom"
          active
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          <div className="row text-start text-sm-center">
            <div className="col-12 col-sm-3">
              <h5 className="card-title bold-font">Order: {order.code}</h5>
            </div>
            <div className="col-12 col-sm-3">
              <p>
                Date placed{" "}
                {format(new Date(order.createdAt), "dd MMM yyyy", {
                  locale: enUS,
                })}
              </p>
            </div>
            <div className="col-12 col-sm-3">
              <p>
                {statusIcons()} {order.status}
              </p>
            </div>
            <div className="col-12 col-sm-3 text-end bold-font">
              <h5>Total: ${order.totalAmount}</h5>
            </div>
          </div>
        </Button>
        <Collapse in={open}>
          <div>
            {order.products.map((product, index) => (
              <div key={index} className="card product-card">
                <div className="row">
                  <div className="col-md-3 col-sm-12 text-center mb-3 mb-sm-0">
                    <img
                      src={`http://localhost:3000/img/${product.image}`}
                      alt="Producto"
                      className="img-fluid product-image"
                      style={{ maxWidth: "150px" }}
                    />
                  </div>
                  <div className="col-md-9 col-sm-12">
                    <div className="card-body">
                      <h5 className="card-title bold-font">{product.name}</h5>
                      <p className="card-text font">{product.description}</p>
                      <p className="card-text light-font">Unit price: USD {product.price}</p>
                      <p className="card-text light-font">Quantity: {product.qty}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Collapse>
      </div>
    </div>
  );
}

export default Order;
