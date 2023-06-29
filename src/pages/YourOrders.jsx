import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Order from "../components/Order";
import "./YourOrders.css";
import { NavLink } from "react-router-dom";
import YourOrdersLoader from "../components/YourOrdersLoader";

function YourOrders() {
  const [orders, setOrders] = useState(null);
  const loggedUser = useSelector((state) => state.user.userData);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    async function getOrdersInfo() {
      try {
        const response = await axios({
          method: "GET",
          url: `${import.meta.env.VITE_APP_BACK}/orders/${loggedUser.id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setOrders(response.data);
      } catch (error) {
        console.error("Error retrieving orders:", error);
      }
    }
    getOrdersInfo();
  }, []);

  return (
    <div className="container">
      <h2>Order history</h2>
      {!orders ? (
        <YourOrdersLoader />
      ) : orders.length === 0 ? (
        <div className="no-orders-message">
          <div>
            <p>
              You haven't bought anything yet! Discover our amazing products and start shopping
              today!
            </p>
            <div></div>
            <NavLink to="/styles">
              <p>Click here to start shopping</p>
            </NavLink>
          </div>
        </div>
      ) : (
        <div>
          {orders.map((order) => (
            <Order key={order.id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
}

export default YourOrders;
