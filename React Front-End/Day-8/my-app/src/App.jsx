import React from 'react';
import './App.css';
import { CartProvider } from './CartContext';
import ProductList from './ProductList';
import CartPage from './CartPage';

const products = [
  {
    id: 1,
    name: 'iPhone 9',
    description: "An apple mobile which is nothing like apple",
    price: 549,
    quantity: 1,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    image: 'https://i.gadgets360cdn.com/large/iphone_8_small_1575871025953.jpg',
  },
  {
    id: 2,
    name: 'iPhone X',
    description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    quantity: 1,
    rating: 4.44,
    stock: 34,
    brand: "Apple",
    category: "smartphones",
    image: 'https://d1tydw6090df56.cloudfront.net/products/320x240/iphone-x-silver-0-c76d79b.jpg',
  },

  {
    id: 3,
    name: 'Samsung Universe 9',
    description: "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    quantity: 1,
    rating: 4.09,
    stock: 36,
    brand: "Samsung",
    category: "smartphones",
    image: 'data:image/jpeg;base64,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',
  },

  {
    id: 4,
    name: 'OPPOF19',
    description: "OPPO F19 is officially announced on April 2021.",
    price: 280,
    quantity: 1,
    rating: 4.3,
    stock: 123,
    brand: "OPPO",
    category: "smartphones",
    image: 'https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/beta-f19/navigation/F19-navigation-blue-v2.png',
  },

  {
    id: 5,
    name: 'Huawei P30',
    description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    price: 499,
    quantity: 1,
    rating: 4.09,
    stock: 32,
    brand: "Huawei",
    category: "smartphones",
    image: 'https://i.gadgets360cdn.com/large/Huawei_p30_pro_small_1551331844672.jpg',
  },
  
];

function App() {
  return (
    <CartProvider>
      <div className="App">
        <ProductList products={products} />
        <CartPage />
      </div>
    </CartProvider>
  );
}

export default App;
