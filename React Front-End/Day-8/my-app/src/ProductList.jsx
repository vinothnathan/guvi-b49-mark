import React from 'react';
import { useCart } from './CartContext';

const ProductList = ({ products }) => {
  const { addItemToCart } = useCart();

  return (
    <div>
      <h2>Products</h2>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Quantity: {product.quantity}</p>
            <button onClick={() => addItemToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
