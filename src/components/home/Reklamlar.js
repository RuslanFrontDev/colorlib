import React from 'react'
const reklamlar = [
   {
      "img": "../../img/deniz.jpg",
      "title": "25/7 Front Desk",
      "source": "A small river named Duden flows by their place and supplies."
   },
   {
      "img": "../../img/istirahet.jpg",
      "title": "Restaurant Bar",
      "source": "A small river named Duden flows by their place and supplies."
   },
   {
      "img": "../../img/deniz.jpg",
      "title": "Transfer Services",
      "source": "A small river named Duden flows by their place and supplies."
   },
   {
      "img": "../../img/istirahet.jpg",
      "title": "Spa Suites",
      "source": "A small river named Duden flows by their place and supplies."
   },
]
const Reklamlar = () => {
   return (
      <div className='flex items-center justify-around flex-wrap mt-7' data-aos="fade-down-left">
         {reklamlar.map((reklam, index) => (
            <div key={index} className='flex flex-col items-center justify-center space-y-3'>
               <div className='w-16 h-16 rounded-full object-cover'>
                  <img src={reklam.img} alt='img1' className='w-full h-full rounded-full object-cover'/>
               </div>
               <div className='font-mono'>  
                  <h4 className='text-2xl font-serif'>{reklam.title}</h4>
               </div>
               <div className=' text-center w-40 font-bold opacity-40'>
                  <p className=' w-full'>
                     {reklam.source}
                  </p>
               </div>
            </div>
         ))}
      </div>
   )
}

export default Reklamlar