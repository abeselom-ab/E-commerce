import React from 'react';
import Hero from '../components/Hero/Hero';
import Products from '../components/Products/Products';
import TopProducts from '../components/TopProducts/TopProducts';
import Banner from '../components/Banner/Banner';
import Subscribe from '../components/Subscribe/Subscribe';
import Testimonial from '../components/Testimonial/Testimonial';

const Home = ({ handleOrderPopup }) => {
  return (
    <div>
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products handleOrderPopup={handleOrderPopup} />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe />
      <Testimonial />
    </div>
  );
};

export default Home;
