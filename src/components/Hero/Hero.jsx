import React from 'react';
import Image1 from '../../assets/image/hero/ecommerce-image-1.png';
import Image2 from '../../assets/image/hero/ecommerce-image-2.png';
import Image3 from '../../assets/image/hero/ecommerce-image-3.jpg';
import Slider from "react-slick";
const ImageList=[
{
  id:1, 
  img:Image1,
  title: 'Upto 30% off',
  description:'Hey there, you want to shop for holidays just use our materials! It is incredible! Hey guys how is your shoping going? If you really want to buy an outstanding brand cloths Tomi Fashion is always ready'
},
{
  id:2, 
  img:Image2,
  title: 'Upto 50% off',
 description:'Hey there, you want to shop for holidays just use our materials! It is incredible! Hey guys how is your shoping going? If you really want to buy an outstanding brand cloths Tomi Fashion is always ready. We offer quality brand Turkish cloths with affordable price! '
},
{
  id:3, 
  img:Image3,
  title: 'Upto 70% off',
 description:'Hey there, you want to shop for holidays just use our materials! It is incredible! Hey guys how is your shoping going? If you really want to buy an outstanding brand cloths Tomi Fashion is always ready. We offer quality brand Turkish cloths with affordable price! '
}
];
const Hero = () => {
  var settings= {
    dots:false,
    arrows:false,
    infinite:true,
    speed:800,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed:4000,
    cssEase:"ease-in-out",
    pauseOnHover:false,
    pauseOnFocus:true,
  };
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[660px] 
          justify-center items-center bg-gray-100 flex dark:bg-gray-950 dark:text-white duration-200'>
      {/*Background pattern*/}
      <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]'>
      </div>
      {/*Hero section*/}
      <div className='container pb-8 sm:pb-0'>
        <Slider {...settings}>
          {ImageList.map((data)=>(
         <div>
          <div className='grid grid-cols-1 sm:grid-cols-2'>
            {/*this is text section*/}
            <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left 
            order-2 sm:order-1 relative z-10'>
              <h1 
              className='text-5xl sm:text-6xl lg:text-7xl font-bold '>
                {data.title}
                </h1>
              <p 
                className='text-sm'>
                {data.description}
              </p>
              <div>
                <button 
                className='bg-gradient-to-r from-primary to-secondary rounded-full hover:scale-105 duration-200 text-white py-2 px-4'
                >Order Now</button>
              </div>
            </div>
            {/*image section*/}
            <div className='order-1 sm:order-2'>
              <div className='relative z-10'>
                <img src={data.img} alt=""
                className='w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] sm:scale-125 object-contain mx-auto' />
              </div>
            </div>
          </div>
         </div>    
          ))}
        </Slider>    
      </div>
    </div>
  );
}

export default Hero