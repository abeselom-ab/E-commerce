// src/pages/KidsWear.jsx
import React from 'react';
import Products from '../components/Products/Products';

const KidsWear = ({ handleOrderPopup }) => {
  return (
    <div>
      <Products handleOrderPopup={handleOrderPopup} />
    </div>
  );
};

export default KidsWear;
