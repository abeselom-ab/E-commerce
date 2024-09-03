// src/pages/MensWear.jsx
import React from 'react';
import Products from '../components/Products/Products';

const MensWear = ({ handleOrderPopup }) => {
  return (
    <div>
      <Products handleOrderPopup={handleOrderPopup} />
    </div>
  );
};

export default MensWear;
