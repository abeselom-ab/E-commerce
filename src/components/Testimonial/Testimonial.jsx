import React from 'react'
import Img1 from '../../assets/image/photos/648-101x101.jpg'
import Img2 from '../../assets/image/photos/453-102x102.jpg'
import Img3 from '../../assets/image/photos/383-103x103.jpg'
import Img4 from '../../assets/image/photos/515-104x104.jpg'

import Slider from 'react-slick'

const TestimonialData= [
  {
    id:1,
    name:'Abadi Tesfay',
    text:'Hey big brother, how have you been? It has been almost 4 years, I really missed you! I heard you joined TDF and you was in several battle fields. Ohh God, I am very happy that you are back home alive from all those difficult situations. I hope I will see you soon physically. I love you my blood brother! Yours little brother!',
    img:Img1
  },
  {
    id:2,
    name:'Beletom',
    text:'That is awesome, Abi! Coding is such a powerful and creative skill. Whether you are building your E-commerce site, exploring new technologies, or just experimenting with code, there is always something new to learn and create ',
   img:Img2
  },
  {
    id:3,
    name:'Shambel',
    text:'That is awesome, Abi! Coding is such a powerful and creative skill. Whether you are building your E-commerce site, exploring new technologies, or just experimenting with code, there is always something new to learn and create.',
    img:Img3  
  },
  {
    id:4,
    name:'Beletom',
    text:'That is awesome, Abi! Coding is such a powerful and creative skill. Whether you are building your E-commerce site, exploring new technologies, or just experimenting with code, there is always something new to learn and create.',
    img:Img4
  },
];
const Testimonial = () => {
  var settings={
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive:[
      {
        breakpoint:10000,
        settings:{
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
       breakpoint: 1024,
       settings:{
        slidesToShow: 2,
        slidesToScroll: 1,
        initialslides: 2,       
       },
      },
      {
        breakpoint: 640,
        settings:{
         slidesToShow: 1,
         slidesToScroll: 1,
        },
       },
    ]
  }
  return (
    <div className='py-10 mb-10 '>
        <div className='container'>
            {/*header section*/}
            <div className='text-center mb-10 max-w-[600px] mx-auto '>
              <p data-aos='fade-up' className='text-sm text-primary'>What our customers are saying</p>
              <h1 data-aos='fade-up' className='text-3xl font-bold'>Testimonials</h1> 
              <p data-aos='fade-up' className='text-xs text-gray-400'>
                That's awesome, Abi! Coding is such a powerful and creative skill. Whether you're building your E-commerce site, exploring new technologies, or just experimenting with code, there's always something new to learn and create.
              </p> 
            </div>
            {/*Testimonial cards*/}
              <div data-aos='zoom-in'>
                <Slider {... settings}>{
                  TestimonialData.map((data)=>( 
                     <div className='my-6'>
                      <div
                       key={data.id}
                       className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 
                       rounded-xl dark:bg-gray-800 bg-primary/10 relative'
                     >
                      <div className='mb-4'>
                        <img src={data.img} alt=""
                          className='rounded-full h-20 w-20'
                        />
                      </div>
                      <div className=''>
                        <div className='space-y-3'>
                          <p className='text-xs text-gray-500'>{data.text}</p> 
                          <h1 className='text-xl font-bold text-black/80 dark:text-light '>{data.name}</h1>
                        </div>
                      </div>
                      <p className='text-black/20 text-9xl font-serif absolute top-0 right-0 '>,,</p>
                     </div>
                    </div>                   
                  ))
                  }</Slider>
              </div>
        </div>
    </div>
  )
}

export default Testimonial