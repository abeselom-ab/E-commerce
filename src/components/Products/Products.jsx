import React from 'react';
import Img1 from '../../assets/image/products/trapstar.jpg';
import Img2 from '../../assets/image/products/jordan1.jpg';
import Img3 from '../../assets/image/products/t-shirt-1.jpg';
import Img4 from '../../assets/image/products/baggy-outfit-1.jpg';
import Img5 from '../../assets/image/products/baggy-outfit-2.jpg';

import { FaStar } from 'react-icons/fa6';
const Products = () => {
    const ProductsData = [
        {
            id: 1,
            img:Img1,
            tittle:'Trapstar Jacket New',
            rating:5.0,
            color:'white',
            aosDelay:"0"
        },
        {
            id: 2,
            img:Img2,
            tittle:'Air Jordan 1',
            rating:4.5,
            color:'red',
            aosDelay:"0"
        },
        {
            id: 3,
            img:Img3,
            tittle:'Oversized T-Shirt',
            rating:5.0,
            color:'brown',
            aosDelay:"0"
        },
        {
            id: 4,
            img:Img4,
            tittle:'Baggy Outfit',
            rating:5.0,
            color:'pink',
            aosDelay:"0"
        },
        {
            id: 5,
            img:Img5,
            tittle:'Full Package',
            rating:5.0,
            color:'pink',
            aosDelay:"0"
        }
    ]
  return (
    <div className='mt-14 mb-12'>
        <div className='container'>
            {/*header section*/}
            <div className='text-center mb-10 max-w-[600px] mx-auto '>
              <p data-aos='fade-up' className='text-sm text-primary'>Top Sellig Products for you</p>
              <h1 data-aos='fade-up' className='text-3xl font-bold'>Products</h1> 
              <p data-aos='fade-up' className='text-xs text-gray-400'>
                That's awesome, Abi! Coding is such a powerful and creative skill. Whether you're building your E-commerce site, exploring new technologies, or just experimenting with code, there's always something new to learn and create.
              </p> 
            </div>
            {/*body section*/}
            <div>
                <div className='grid max-sm:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
                    {/*card section*/}
                    {ProductsData.map((data)=>(
                        <div 
                        data-aos='fade-up'
                        data-aos-delay={data.aosDelay}
                        key={data.id} 
                        className='space-y-3'>
                            <img 
                              src={data.img} 
                              alt=""
                              className='h-[220px] w-[150px] object-cover rounded-md '
                              />
                              <div>
                                <h3 className='font-semibold'>{data.tittle}</h3>
                                 <p className='text-sm text-gray-600'>{data.color}</p>
                                 <div className='flex items-center gap-1'>
                                  <FaStar className='text-yellow-500'/>
                                   <span>{data.rating}</span>
                                 </div>
                               </div>
                        </div>
                    ))}
                </div>
                 {/*view all products */}
                 <div className='flex justify-center '>
                    <button 
                      className='bg-primary cursor-pointer hover:scale-105 text-white py-1 px-5 duration-300 
                      rounded-md mt-1 '
                    >
                      View All Products
                    </button>
                    </div>
            </div>
        </div>
    </div>
  );
};

export default Products