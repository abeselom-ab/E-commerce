import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TopProducts from './components/TopProducts/TopProducts';
import Banner from './components/Banner/Banner';
import Subscribe from './components/Subscribe/Subscribe';
import Testimonial from './components/Testimonial/Testimonial';
import Footer from './components/Footer/Footer';
import Popup from './components/Popup/Popup';

function App() {
const [orderPopup, setOrderPoupup]= React.useState(false);
const handleOrderPopup = () =>{
  setOrderPoupup(!orderPopup);
}

  React.useEffect(() => {
    AOS.init({
      offset:100,
      duration: 800, 
      easing: 'ease-in-sine', 
      delay: 100, 
    });
    AOS.refresh();
  }, []);

  return (
    <div className='bg-white dark:bg-gray-900  dark:text-white duration-300 '>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products handleOrderPopup={handleOrderPopup} />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe />
      <Products />
      <Testimonial />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPoupup={setOrderPoupup} />
    </div>
  );
};

export default App
