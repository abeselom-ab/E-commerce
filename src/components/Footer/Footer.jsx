import React from 'react'
import footerLogo from '../../assets/image/products/logo.png'
import Banner from '../../assets/image/products/footer-pattern.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa6'
import { FaMobileAlt } from 'react-icons/fa'

const BannerImage = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: 'bottom',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    height:'100%',
    width:'100%'
}
const FooterLinks = [
    {
        tittle: 'Home',
        link:  '/#'
    },
    {
        tittle: 'About',
        link:  '/#about'
    },
    {
        tittle: 'Contact',
        link:  '/#contact'
    },
    {
        tittle: 'Blog',
        link:  '/#blog'
    }
]
const Footer = () => {
  return (
    <div style={BannerImage} className='mb-20 text-white'>
        <div className='container'>
            <div 
             data-aos='zoom-in'
             className='grid md:grid-cols-3 pb-44 pt-5 '>
                {/*company details*/}
                <div className='py-8 px-4'>
                    <h1 
                      className='sm:text-3xl text-xl font-bold sm:text-left test-justify mb-3 gap-3 items-center flex '>
                      <img className='max-w-[50px]' src={footerLogo} alt="" />  
                      Shopsy</h1>
                    <p>Hey big brother, how have you been? It has been almost 4 years, I really missed you! I heard you joined TDF and you was in several battle fields. Ohh God, I am very happy that you are back home alive from all those difficult situations. I hope I will see you soon physically. I love you my blood brother! Yours little brother!</p>
                </div>
               {/*Footer Links*/}
               <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                <div>
                    <div className='py-8 px-2'>
                        <h1 className='sm:text-3xl text-xl font-bold text-justify sm:text-left mb-3 '>
                          Important Links
                        </h1>
                        <ul className='flex flex-col gap-3'>
                            {
                                FooterLinks.map((link)=>(
                                    <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200 ' key={link.id}>
                                        <span>{link.tittle}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                 </div>
                 <div>
                    <div className='py-8 px-2'>
                        <h1 className='sm:text-3xl text-xl font-bold text-justify sm:text-left mb-3 '>
                         Links
                        </h1>
                        <ul className='flex flex-col gap-3'>
                            {
                                FooterLinks.map((link)=>(
                                    <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200 ' key={link.id}>
                                        <span>{link.tittle}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                 </div>
                 {/*social links */}
                 <div>
                    <div className='flex items-center mt-8 gap-3'> 
                        <a href="#">
                            <FaInstagram className='text-3xl' />
                        </a>
                        <a href="#">
                            <FaFacebook className='text-3xl' />
                        </a>
                        <a href="#">
                            <FaLinkedin className='text-3xl' />
                        </a>
                    </div>
                    <div className='mt-6'>
                        <div className='flex items-center gap-3'>
                            <FaLocationArrow />
                            <p>Mekelle, Ethiopia</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <FaMobileAlt />
                            <p>+251 937 462 388</p>
                        </div>
                    </div>
                 </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Footer