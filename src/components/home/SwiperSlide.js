import React from 'react'
import Slider from "react-slick";
const SwiperSlide = () => {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true, 
      autoplaySpeed: 2000, 
   };
   const swipers = [
      {
         "img": "../../img/deniz.jpg",
         "paraq": "A small river named Duden flows by their place and supplies.A small river named ",
         "name": "Nathan Smith",
         "type": "Person"
      },
      {
         "img": "../../img/istirahet.jpg",
         "paraq": "A small river named Duden flows by their place and supplies.A small river named ",
         "name": "Nathan Smith",
         "type": "Person"
      },
      {
         "img": "../../img/deniz.jpg",
         "paraq": "A small river named Duden flows by their place and supplies.A small river named ",
         "name": "Nathan Smith",
         "type": "Person"
      },
      {
         "img": "../../img/istirahet.jpg",
         "paraq": "A small river named Duden flows by their place and supplies.A small river named ",
         "name": "Nathan Smith",
         "type": "Person"
      },
   ]
   return (
      <div>
         <Slider {...settings} className='' >
            {swipers.map((swiper, index) => (
               <div key={index} className='flex flex-col w-full items-center justify-center text-center my-4 gap-4 space-y-4' data-aos="zoom-in-up">
                  <img src={swiper.img} alt='Sekil' className='w-24 h-24 object-cover rounded-full'
                     style={{ display: 'block', margin: '0 auto' }}
                  />
                  <p className=' text-center opacity-40 flex items-center justify-center'>{swiper.paraq}<br />
                     Duden flows by their place and supplies.
                  </p>
                  <h4 className='font-semibold text-2xl'>{swiper.name}</h4>
                  <div className='opacity-40 font-bold text-2xl'>{swiper.type}</div>
               </div>
            ))}

         </Slider>
      </div>
   )
}

export default SwiperSlide