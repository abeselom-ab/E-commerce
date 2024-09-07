import React from 'react';
import Img1 from '../assets/image/products/electronic1.jpg';
import Img2 from '../assets/image/products/electronic2.jpg';
import Img3 from '../assets/image/products/electronic3.jpg';
import Img4 from '../assets/image/products/electronic4.jpg';
import Img5 from '../assets/image/products/electronic5.jpg';
import Img6 from '../assets/image/products/electronic2.jpg';

export default function ElectronicsCardGrid() {
  const ProductsData = [
    {
      id: 1,
      img: Img1,
      title: 'Product Name 1',
      price: '$199.99',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      category: 'Electronics', 
    },
    {
      id: 2,
      img: Img2,
      title: 'Product Name 2',
      price: '$149.99',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      category: 'Electronics',
    },
    {
      id: 3,
      img: Img3,
      title: 'Product Name 1',
      price: '$199.99',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      category: 'Electronics', 
    },
    {
      id: 4,
      img: Img4,
      title: 'Product Name 2',
      price: '$149.99',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      category: 'Electronics',
    },
    {
      id: 5,
      img: Img5,
      title: 'Product Name 1',
      price: '$199.99',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      category: 'Electronics', 
    }, 
    {
      id: 6,
      img: Img6,
      title: 'Product Name 1',
      price: '$199.99',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      category: 'Electronics', 
    }, 
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Our Electronics Collection</h1>
        <p className="text-gray-700">Discover the latest gadgets and tech</p>
      </header>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ProductsData.map((data) => (
          <div
            key={data.id}
            className="card bg-white shadow-md rounded-lg overflow-hidden relative"
          >
            <img
              src={data.img}
              alt={data.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold leading-snug mb-2">
                  {data.title}
                </h3>
                <span className="text-gray-700 text-sm line-clamp-2">{data.description}</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-gray-900 font-bold text-lg">{data.price}</span>
                <button
                  type="button"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}