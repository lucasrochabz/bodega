import { useEffect, useState } from 'react';
import './OrderList.css';

export const OrderList = () => {
  const [orders, setOrders] = useState('');

  const getOrders = async () => {
    const response = await fetch('url');
    const results = await response.json();
    setOrders(results.data);
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div>
      {orders.map((order) => {
        <h2>item</h2>;
      })}
    </div>
  );
};
