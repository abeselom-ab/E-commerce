import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../store/features/productSlice'; // Import your thunk
import { FaStar } from 'react-icons/fa6';

const Products = ({ handleOrderPopup }) => {
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
  .slice(0, 10); // Get the top 3 products

  return (
    <div className='mt-14 mb-12'>
      <div className='container'>
        {/* Header section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p data-aos='fade-up' className='text-sm text-primary'>
            Top Selling Products for you
          </p>
          <h1 data-aos='fade-up' className='text-3xl font-bold'>Products</h1>
          <p data-aos='fade-up' className='text-xs text-gray-400'>
            That's awesome, Abi! Coding is such a powerful and creative skill. Whether you're building your E-commerce site, exploring new technologies, or just experimenting with code, there's always something new to learn and create.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className='grid max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 place-items-center'>
            {/* Card section */}
            {topProducts.map((product) => (
              <div 
                data-aos='fade-up'
                key={product._id} // Use product ID from the backend
                className='space-y-3'>
                <img 
                    src={`http://localhost:3000/uploads/${product.productImage}`}  
                    alt={product.productName}
                  className='h-[220px] w-[150px] object-cover rounded-md'
                />
                <div>
                  <h3 className='font-semibold'>{product.productName}</h3>
                  <p className='text-sm text-gray-600'>{product.productType}</p>
                  <div className='flex items-center gap-1'>
                    <FaStar className='text-yellow-500' />
                    <span>{product.productRating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* View all products */}
          <div data-aos='fade-up' className='flex justify-center'>
            <button 
              className='bg-primary cursor-pointer hover:scale-105 text-white py-1 px-5 duration-300 
              rounded-md mt-1'
              onClick={handleOrderPopup}
            >
              View All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
