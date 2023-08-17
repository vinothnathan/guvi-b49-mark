import React from 'react';
import PriceCard from './PriceCard';

const App = () => {
  const plans = [
    {
      planName: 'Basic Plan',
      dataLimit: 'Unlimited Data',
      speed: '40 Mbps speed',
      price: '499',
      buttonText: 'Select Plan',
    },
    {
      planName: 'Standard Plan',
      dataLimit: 'Unlimited Data',
      speed: '100 Mbps speed',
      price: '799',
      buttonText: 'Select Plan',
    },
    {
      planName: 'Premium Plan',
      dataLimit: 'Unlimited Data',
      speed: '200 Mbps speed',
      price: '999',
      buttonText: 'Select Plan',
    },
  ];

  const priceCards = plans.map((plan, index) =>
    React.createElement(PriceCard, { key: index, ...plan })
  );

  return React.createElement('div', { className: 'app' }, priceCards);
};

export default App;

