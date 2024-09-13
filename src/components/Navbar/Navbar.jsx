import { Link } from 'react-router-dom';
import React from 'react';
import Logo from '../../assets/image/logo.png';
import { IoMdSearch } from 'react-icons/io';
import {FaCaretDown, FaCartShopping} from 'react-icons/fa6';

import DarkMode from './DarkMode';

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/"
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/top-rated"
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/kids-wear"
  },
  {
    id: 4,
    name: "Mens Wear",
    link: "/mens-wear"
  },
  {
    id: 5,
    name: "Electronics",
    link: "/electronics"
  },
];

const DropdownLinks= [
  {
    id:1,
    name: "Trending Product",
    link: "/#"
  },
  {
    id:2,
    name: "Best Selling",
    link: "/#"
  },
  {
    id:3,
    name: "Top Rated",
    link: "/#"
  },
  
]
const Navbar = ({handleOrderPopup}) => {
  return (
    <div className='bg-white shadow-md dark:bg-gray-900 dark:text-white duration-200 relative z-40 '>
    {/* Uppper Navbar */}
      <div className='bg-primary/40 py-2'>
        <div className='container  flex justify-between items-center'>
          <div>
            <Link to="/" className='font-bold text-2xl sm:text-3xl flex gap-2 '>
              <img src={Logo} alt="Logo" 
              className="w-10"
              />
              Shopsy
            </Link>
          </div>

          <div className='flex justify-between items-center gap-4'>
          
          {/*Search bar*/}
            <div className='relative group hidden sm:block'>
              <input type="text"
              placeholder="search"
              className="w-[200px] sm:w-[200px] group-hover:w-[300px] 
              transition-all duration-300 rounded-full border
              border-gray-300 px-2 py-1 focus:outline-none focus:border-1
              focus:border-primary
              dark:border-gray-500
              dark:bg-gray-800"
              />
              <IoMdSearch className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3'/>
            </div>

           {/*Order button*/}
            <button 
            onClick={()=> handleOrderPopup()}
            className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 py-1 px-4 rounded-full flex items-center gap-3 group '>
            <span
            className='group-hover:block hidden transition-all duration-200'
            >Order</span>
            <FaCartShopping
            className='text-white text-xl drop-shadow-sm cursor-pointer'
            />
            </button>

            {/*Darkmode Switch*/}
            <div>
              <DarkMode/>
            </div>
          </div>
         
        </div>
      </div>
    {/*Lower Navbar */}
      <div data-aos='zoom-in' className='flex justify-between items-center'>
        <div>
        <ul className='sm:flex hidden items-center gap-4'>
          {Menu.map((data)=>(
              <li key={data.id} className=''>
              <Link 
              to={data.link}
              className='inline-block px-4 hover:text-primary duration-200 '
              >
                {data.name}
              </Link>
              </li>
            ))}
          {/*Simple Dropdown and Links*/}
          <li className='group relative'>
          <Link to="/"
              className='flex items-center gap-[2px] py-2 '
              >
                Trending Products
                <span>
                  <FaCaretDown
                  className='transition-all duration-200 group-hover:rotate-180 '
                  />
                </span>
          </Link>
              <div className='absolute z-[9999] hidden group-hover:block w-[180px] rounded-md
               bg-white p-2 text-black shadow-md'>
                <ul>
                  {DropdownLinks.map((data)=>(
                    <li key={data.id}>
                      <Link to={data.link}
                      className='inline-block w-full rounded-md hover:bg-primary/20 p-2'
                      >
                        {data.name} 
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
          </li>
        </ul>              
        </div>
        <div className='inline-block px-4 hover:text-primary duration-200  '>
          <Link to='/login' >Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar