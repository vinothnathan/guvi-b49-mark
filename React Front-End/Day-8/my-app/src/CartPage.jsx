import React from 'react';
import { useCart } from './CartContext';

const CartPage = () => {
  const { cart, addItemToCart, removeItemFromCart } = useCart();

  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul className="cart-list">
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Price: ${item.price.toFixed(2)}</p>
            <div>
              <button onClick={() => removeItemFromCart(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => addItemToCart(item)}>+</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <p>Total Quantity: {getTotalQuantity()}</p>
        <p>Total Amount: ${getTotalAmount().toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartPage;
