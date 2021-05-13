import React from 'react';
import { useAuth } from '../access/AuthContext';

const ReceiptPage = () => {
  const { signOut } = useAuth();
  return (
    <div>
      <h2>Your Receipt</h2>
      <p>Thank you for your payment!</p>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
};

export default ReceiptPage;
