import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>Price: ₹{item.price}</p>
      <button onClick={() => removeFromCart(item)}>Remove from Cart</button>
    </div>
  );
};

export default CartItem;



