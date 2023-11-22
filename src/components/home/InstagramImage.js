import React from 'react'
const images = [
   {
      "image": "../../img/adam1.jpg",
   },
   {
      "image": "../../img/room1.jpg",
   },
   {
      "image": "../../img/bg_1.jpg.webp",
   },
   {
      "image": "../../img/qiz.jpg",
   },
]
const InstagramImage = () => {
   return (
      <div className='flex flex-col md:flex-row items-start justify-start w-full' data-aos="flip-up">
         
         {images.map((img, index) => (
            <div className='flex flex-col md:flex-row items-start justify-start w-full'>
               <img src={img.image} key={index} alt='sekil' className='w-full h-[200px] object-cover' />
            </div>
         ))}
      </div>
   )
}

export default InstagramImage