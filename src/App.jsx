import React, { useEffect, useState } from 'react';
import 'tw-elements';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AppRoutes from './routes/index.jsx';
import Popup from './components/Popup/Popup';

function App() {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-300'>
      <AppRoutes handleOrderPopup={handleOrderPopup} />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
}

export default App;
