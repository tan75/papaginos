import React from 'react';

function orderPage() {
  return (
    <div>
      <h2>Your Order</h2>
      <h3>Please enter your details to place your order</h3>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log('Your order is being placed...');
        }}
      >
        <label htmlFor="cardNumber">Enter card number</label>
        <br />
        <input type="text" />
        <br />
        <label htmlFor="cardHolder">Enter name on the card</label>
        <br />
        <input type="text" />
        <br />
        <label htmlFor="cardExpirationDate">Enter card expiration date</label>
        <br />
        <input type="date" />
        <br />
        <label htmlFor="cardCVV">Enter card CVV</label>
        <br />
        <input type="number" />
        <br />
        <button type="submit">Make payment</button>
      </form>
    </div>
  );
}

export default orderPage;
