import { useState, useEffect } from "react";
import "./OrderSuccess.css";
import { NavLink } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";

function OrderSuccess() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <section className="order-success-container">
        <div className="order-succes-text">
          {isLoading ? (
            <LoadingOutlined className="fs-1" spin />
          ) : (
            <>
              <div className="text-center">
                <i className="fas fa-check-circle order-succes-icon-size"></i>
                <p>Su compra fue realizada con exito</p>
              </div>
              <div className="order-succes-link">
                <NavLink to="/home" className=" text-white">
                  <p>Volver a la pagina principal</p>
                </NavLink>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
export default OrderSuccess;
