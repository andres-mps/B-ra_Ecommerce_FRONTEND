import { useState, useEffect } from "react";
import "./OrderSuccess.css";
import { NavLink } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

function OrderSuccess() {
  const [isLoading, setIsLoading] = useState(true);
  const [showEffect, setShowEffect] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowEffect(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="order-success-container">
      <div className="order-succes-text">
        {isLoading ? (
          <LoadingOutlined className="fs-1" spin />
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showEffect ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center">
                <i className="fas fa-check-square order-succes-icon-size"></i>
                <p>Your order is confirmed!</p>
              </div>
            </motion.div>
            <NavLink to="/orders" className="track-text">
              <p>Track order</p>
              </NavLink>
            
            <div>
              <NavLink to="/home" className="text-white">
                <button className="boton-success">Return to home</button>
              </NavLink>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default OrderSuccess;
