import React from 'react';
import Products from '../components/Products/Products';

const TopRated = ({ handleOrderPopup }) => {
  return (
    <div>
      <Products handleOrderPopup={handleOrderPopup} />
    </div>
  );
};

export default TopRated;
