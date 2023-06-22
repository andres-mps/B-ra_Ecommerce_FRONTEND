import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Order from "../components/Order";

function YourOrders() {
  const [orders, setOrders] = useState([]);
  const loggedUser = useSelector((state) => state.user.userData);
  const token = useSelector((state) => state.user.token);
  useEffect(() => {
    async function getOrdersInfo() {
      try {
        const response = await axios({
          method: "GET",
          url: `http://localhost:3000/orders/${loggedUser.id}`,
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
              <div>
        {orders.map((order) => (
          <Order key={order.id} order={order} />
        ))}
      </div>

    </div>
  );
}

export default YourOrders;
