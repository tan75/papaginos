import React from 'react';
import { useAuth } from '../access/AuthContext';

function OrdersPage() {
  const { signOut } = useAuth();
  return (
    <div>
      <h2>Your Orders</h2>
      <ol>
        <li>Dummy Order 1</li>
        <li>Dummy Order 2</li>
        <li>Dummy Order 3</li>
      </ol>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
}

export default OrdersPage;
