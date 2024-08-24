import React from 'react';
import Img1 from '../../assets/image/products/ecommerce-image-1.png';
import Img2 from '../../assets/image/products/ecommerce-image-2.png';
import Img3 from '../../assets/image/products/ecommerce-image-3.jpg';
import Img4 from '../../assets/image/products/ecommerce-image-4.png';
import Img5 from '../../assets/image/products/ecommerce-image-5.jpg';

import { FaStar } from 'react-icons/fa6';
const Products = () => {
    const ProductsData = [
        {
            id: 1,
            img:Img1,
            tittle:'Baggy Jeans',
            rating:5.0,
            color:'white',
            aosDelay:"0"
        },
        {
            id: 2,
            img:Img2,
            tittle:'Baggy Jeans',
            rating:4.5,
            color:'red',
            aosDelay:"0"
        },
        {
            id: 3,
            img:Img3,
            tittle:'Baggy Jeans',
            rating:5.0,
            color:'brown',
            aosDelay:"0"
        },
        {
            id: 4,
            img:Img4,
            tittle:'Baggy Jeans',
            rating:5.0,
            color:'pink',
            aosDelay:"0"
        },
        {
            id: 5,
            img:Img5,
            tittle:'Baggy Jeans',
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
              <p className='text-sm text-primary'>Top Sellig Products for you</p>
              <h1 className='text-3xl font-bold'>Products</h1> 
              <p className='text-xs text-gray-400'>
                That's awesome, Abi! Coding is such a powerful and creative skill. Whether you're building your E-commerce site, exploring new technologies, or just experimenting with code, there's always something new to learn and create.
              </p> 
            </div>
            {/*body section*/}
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5'>
                    {/*card section*/}
                    {ProductsData.map((data)=>(
                        <div key={data.id} className='space-y-3'>
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
            </div>
        </div>
    </div>
  );
};

export default Products