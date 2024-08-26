import React from 'react'
import Banner from '../../assets/image/products/bannerImage.png'

const BannerImage = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: 'center',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    height:'100%',
    width:'100%'
}
const Subscribe = () => {
  return (
    <div 
      data-aos='zoom-in '
      className='mb-20 text-white bg-gray-100 dark:bg-gray-800' 
      style={BannerImage}
    >
        <div className='container backdrop-blur-sm py-10'>
            <div className='max-w-xl mx-auto space-y-6'>
              <h1
               className='text-2xl !text-center sm:text-4xl sm:text-left'
              >Get Notified About New Products</h1>
              <input className='w-full p-3 text-gray-700' type="text" placeholder='Enter your email'/>
            </div>
        </div>
    </div>
  )
}

export default Subscribe