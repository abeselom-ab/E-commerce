import React from 'react'
import BannerImg from '../../assets/image/products/banner-image.jpg'
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import { GiFoodTruck } from 'react-icons/gi'

const Banner = () => {
  return (
    <div className='min-h-[550px] justify-center items-center flex py-12 sm:py-0'>
        <div className='container'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
            {/*image section*/}
            <div data-aos='zoom-in' className=' '>
              <img 
              className='max-w-[450px] max-h-[350px] mx-auto w-full drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover'
              src={BannerImg} alt="" />
            </div>
            {/*text details section*/}
            <div className='flex flex-col justify-center gap-6'>
              <h1 
                data-aos='fade-up'
                className='text-3xl sm:text-4xl font-bold'>
                Summer Sales upto 50% Off
              </h1>
              <p 
                data-aos='fade-up'
                className='text-sm text-gray-500 tracking-wide leading-5 '>
                Hey, guys. If you really want to buy a summer outfits here is T0MI FASHION!
                That's awesome, Abi! Coding is such a powerful and creative skill. Whether you're building your E-commerce site, exploring new technologies, or just experimenting with code, there's always something new to learn and create.
              </p>
              <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-4'>
                  <GrSecure
                  data-aos='fade-up'
                  className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400'
                  />
                  <p>Quality Products</p>
                </div>
                <div className='flex items-center gap-4'>
                  <IoFastFood
                  data-aos='fade-up'
                  className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400'
                  />
                  <p>Fast Delivery</p>
                </div>
                <div className='flex items-center gap-4'>
                  <GiFoodTruck
                  data-aos='fade-up'
                  className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400'
                  />
                  <p>Get Offers</p>
                </div>
              </div>
           </div>
          </div>
        </div>
    </div>
  )
}

export default Banner