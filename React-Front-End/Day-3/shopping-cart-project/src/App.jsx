import React, { useState } from 'react';
import ProductList from './ProductList';
import CartItem from './CartItem';
import './index.css';

const productsData = [
  {
    id: 1,
    name: 'Sony Alpha ILCE-6100Y 24.2 MP Mirrorless Digital SLR Camera',
    model: 'ILCE-6100Y/B IN5',
    price: 80990,
    image: 'https://static.langimg.com/thumb/msid-90351038,width-200,resizemode-4/sony-ilce6100y-dslr-camera-16-50-mm-plus-55-210-mm-lens-90351038.jpg',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Sony Alpha ILCE 6100L 24.2 MP Mirrorless Digital SLR Camera',
    model: 'ILCE-6100L/B IN5.',
    price: 66990,
    image: 'https://www.price-hunt.com/content/images/cameras/sony-ilce-6600-m-b-in-5-mirrorless-camera-with-18-135-mm-zoom-lens_l.jpeg',
    rating: 4.4,
  },
  {
    id: 3,
    name: 'Sony Digital Vlog Camera',
    model: 'ZV-1.',
    price: 52990,
    image: 'https://i.gadgets360cdn.com/products/large/sony-zv-1-db-800x600-1602251227.jpg?downsize=*:360',
    rating: 4.3,
  },
];

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (!cart.includes(product)) {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item !== product);
    setCart(updatedCart);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Camera Shopping</h1>
        <p>Cart Quantity: {cart.length}</p>
      </header>
      <div className="shopping-container">
        <ProductList products={productsData} addToCart={addToCart} />
        <div className="cart">
          <h2>Shopping Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default App;


