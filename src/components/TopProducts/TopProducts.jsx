import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../store/features/productSlice';
import { FaStar } from 'react-icons/fa6';

const TopProducts = ({handleOrderPopup}) => {

    const dispatch = useDispatch();

    // Fetch products from Redux store
    const { products, status, error } = useSelector((state) => state.product);

    // Dispatch the action to get all products on component mount
    useEffect(() => {
      dispatch(getAllProducts());
    }, [dispatch]);

    if (status === 'loading') {
      return <div>Loading products...</div>;
    }

    if (status === 'failed') {
      return <div>Error: {error}</div>;
    }

   const topProducts = products
  .slice() // Create a shallow copy of the products array
  .sort((a, b) => b.productRating - a.productRating) // Sort by productRating in descending order
  .slice(0, 3); // Get the top 3 products

  return (
    <div>
        <div className='container'>
            {/*header section*/}
            <div className='text-left mb-24 '>
              <p data-aos='fade-up' className='text-sm text-primary'>Top Rated Products for you</p>
              <h1 data-aos='fade-up' className='text-3xl font-bold'>Best Products</h1> 
              <p data-aos='fade-up' className='text-xs text-gray-400'>
                That's awesome, Abi! Coding is such a powerful and creative skill. Whether you're building your E-commerce site, exploring new technologies, or just experimenting with code, there's always something new to learn and create.
              </p> 
            </div>
            {/*body section*/}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center space-y-6 '>
                {topProducts.map((product)=>(
                        <div 
                          data-aos='zoom-in'
                          className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80
                          dark:hover:bg-primary hover:text-white relative shadow-xl 
                          duration-300 group max-w-[300px]'>
                            {/* image section*/}
                            <div className='h-[100px]'>
                              <img 
                                  className='w-[180px] h-[180px] block mx-auto transform -translate-y-20 
                                  group-hover:scale-105 duration-300 drop-shadow-md '
                                  src={`http://localhost:3000/uploads/${product.productImage}`}  
                                  alt={product.productName}
                              />
                            </div>
                            {/*detail section*/}
                            <div className='p-4 text-center'>
                              {/*star rating*/}
                              <div className='flex w-full items-center gap-1'>
                                <FaStar className='text-yellow-500 '/>
                                <FaStar className='text-yellow-500 '/>
                                <FaStar className='text-yellow-500 '/>
                                <FaStar className='text-yellow-500 '/>
                              </div>
                              <h1 className='text-xl font-bold'>{product.productName}</h1>
                              <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>
                                {product.productDescription}</p>
                              <button 
                                className='bg-primary hover:scale-105 text-white py-1 px-4 duration-300 
                                rounded-full mt-4 group-hover:bg-white group-hover:text-primary '
                                onClick={handleOrderPopup}
                              >
                                Order Now
                              </button>
                            </div>

                        </div>
                    ))}
            </div>

        </div>
    </div>
  )
}

export default TopProducts