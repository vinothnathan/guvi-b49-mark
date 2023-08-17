// PriceCard.js
import React from 'react';
import './index.css'; // Import your CSS file for styling

const PriceCard = (props) => {
  const { planName, dataLimit, speed, price, buttonText } = props;

  return React.createElement(
    'div',
    { className: 'price-card' },
    React.createElement('h2', { className: 'plan-name' }, planName),
    React.createElement('p', { className: 'data-limit' }, dataLimit),
    React.createElement('p', { className: 'speed' }, speed),
    React.createElement('p', { className: 'price' }, `${price}`),
    React.createElement('button', { className: 'btn' }, buttonText)
  );
};

export default PriceCard;
