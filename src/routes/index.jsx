import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import AddProduct from '../components/Products/AddProducts';
import Register from '../pages/Register';
import TopRated from '../pages/TopRated';
import KidsWear from '../pages/KidsWear';
import MensWear from '../pages/MensWear';
import Electronics from '../pages/Electronics';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const AppRoutes = ({ handleOrderPopup }) => {
  return (
    <Router>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Routes>
        <Route path="/" element={<Home handleOrderPopup={handleOrderPopup} />} />
        <Route path="/signin" element={<LoginPage /> } />
        <Route path="/register" element={<Register /> } />
        <Route path="/add-product" element={<AddProduct/> } />
        <Route path="/top-rated" element={<TopRated handleOrderPopup={handleOrderPopup} />} />
        <Route path="/kids-wear" element={<KidsWear handleOrderPopup={handleOrderPopup} />} />
        <Route path="/mens-wear" element={<MensWear handleOrderPopup={handleOrderPopup} />} />
        <Route path="/electronics" element={<Electronics handleOrderPopup={handleOrderPopup} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
