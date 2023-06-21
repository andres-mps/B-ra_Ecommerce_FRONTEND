import React, { useEffect, useState } from "react";
import axios from "axios";
import Order from "../components/Order";

function YourOrders() {
  const [orders, setOrders] = useState([]);
  const userId = 3;
  useEffect(() => {
    async function getOrdersInfo() {
      try {
        const response = await axios.get(`http://localhost:3000/orders/${userId}`);
        setOrders(response.data);
      } catch (error) {
        console.error("Error retrieving orders:", error);
      }
    }
    getOrdersInfo();
  }, []);

  return (
    <div className="container">
      <h2>Historial de compras</h2>
      <div>
                {orders.map((order) => (
          <Order key={order.id} order={order} />
        ))}
        </div>
      </div>
  );
}

export default YourOrders;
