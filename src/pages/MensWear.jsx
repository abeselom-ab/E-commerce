import React from 'react';
import Img1 from '../assets/image/products/trapstar.jpg';
import Img2 from '../assets/image/products/jordan1.jpg';
import Img3 from '../assets/image/products/t-shirt-1.jpg';
import Img4 from '../assets/image/products/baggy-outfit-1.jpg';
import Img5 from '../assets/image/products/baggy-outfit-2.jpg';
import Img6 from '../assets/image/products/hoodie.jpg';
import Img7 from '../assets/image/products/t-shirt-1.jpg';
import Img8 from '../assets/image/products/t-shirt-2.jpg';

export default function CardWithImageExample() {
  const ProductsData = [
    {
      id: 1,
      img: Img1,
      title: 'Trapstar Jacket New',
      price: '$199.99', // Added price property for each item
    },
    {
      id: 2,
      img: Img2,
      title: 'Air Jordan 1',
      price: '$149.99',
    },
    {
      id: 3,
      img: Img3,
      title: 'Oversized T-Shirt',
      price: '$29.99',
    },
    {
      id: 4,
      img: Img4,
      title: 'Baggy Outfit',
      price: '$89.99',
    },
    {
      id: 5,
      title: 'Full Package',
      img: Img5, // Assuming Img5 exists (add if not)
    },
    {
      id: 6,
      title: 'Cozy Hoodie', // Changed title for variety
      img: Img6, // Assuming Img5 exists (add if not)
      price: '$69.99',
    },
    {
      id: 7,
      title: 'Essential T-Shirt', // Changed title for variety
      img: Img7, // Assuming Img5 exists (add if not)
      price: '$19.99',
    },
    {
      id: 8,
      title: 'Graphic Tee', // Changed title for variety
      img: Img8, // Assuming Img5 exists (add if not)
      price: '$24.99',
    },
  ];

  return (
    <div className="flex items-center min-h-screen bg-gray-100"> 
      <div className="mx-auto">  
        {/* header section */}
        <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Mens Fashion Collection</h1>
        <p className="text-gray-700">Discover the latest gadgets and tech</p>
      </header>
        <div className="grid max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-8 mb-10">  
          {ProductsData.map((data) => (
            <div
              key={data.id}
              className="relative flex flex-col bg-white shadow-md rounded-lg w-full"
            >
              <div className="relative h-56 mx-4 -mt-6 overflow-hidden">
                <img src={data.img} alt="card-image" className="w-full h-full object-cover" /> 
              </div>
              <div className="p-6">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-900">
                  {data.title}
                </h5>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
                  {/* Content for card description (replace with your content) */}
                </p>
                <div className="flex items-center mt-4"> 
                  <span className="text-gray-900 font-semibold text-lg mr-2">
                    {data.price}
                  </span>
                  <button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                      type="button"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}