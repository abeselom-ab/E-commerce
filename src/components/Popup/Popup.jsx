import React from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5'
const Popup = ({orderPopup, setOrderPoupup}) => {
  return (
  <>
    {orderPopup && (
        <div className='popup'>
            <div className='h-screen w-screen fixed bg-black/50 z-50 top-0 right-0 backdrop-blur-sm '>
              <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md bg-white dark:bg-gray-900 rounded-md w-[300px]'>
                {/*header*/}
                 <div className='flex items-center justify-between'>
                    <div>
                        <h1>Order Now</h1>
                    </div>
                    <div>
                        <IoCloseCircleOutline 
                        className='text-2xl cursor-pointer'
                        onClick={() => setOrderPoupup(false)}
                        />
                    </div>
                 </div>
                {/*form section*/}
                <div className=''>
                    <input 
                    type="text"
                    placeholder='Name'
                    className='w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4'
                    />
                    <input 
                    type="email"
                    placeholder='Email'
                    className='w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4'
                    />
                    <input 
                    type="text"
                    placeholder='Address'
                    className='w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4'
                    />
                    <div className='flex justify-center mb-2'>
                      <button
                        className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full'
                      >
                        Order Now
                      </button>
                    </div>        
                </div>
              </div>
            </div>

        </div>
    )}      
  </>
    );
  
}

export default Popup