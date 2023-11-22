import React from 'react'
import { RiStarSLine } from "react-icons/ri";
const rooms = [
   {
      "img": "../../img/room1.jpg",
      "title": "Suite Room",
      "price": "$120.000",
      "btn": "View Room Details ->>"
   },
   {
      "img": "../../img/room1.jpg",
      "title": "Family Room",
      "price": "$20.000",
      "btn": "View Room Details ->>"
   },
   {
      "img": "../../img/room1.jpg",
      "title": "Deluxe Room",
      "price": "$150.000",
      "btn": "View Room Details ->>"
   },
   // {
   //    "img": "../../img/istirahet.jpg",
   //    "title": "Classic Rooms",
   //    "price": "$200.000",
   //    "btn": "View Room Details ->>"
   // },
   // {
   //    "img": "../../img/room1.jpg",
   //    "title": "Superior Room",
   //    "price": "$150.000",
   //    "btn": "View Room Details ->>"
   // },
   // {
   //    "img": "../../img/istirahet.jpg",
   //    "title": "Luxury Rooms",
   //    "price": "$40.000",
   //    "btn": "View Room Details ->>"
   // }
]
const RoomsInputs = () => {
   const newLocal = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 '
   return (
      <div className='flex flex-col items-center justify-center gap-8'>
         <div className=' flex flex-col items-center justify-center gap-4'>
            <div className='text-center flex flex-col items-center justify-center gap-1'>
               <div className='text-3xl pb-3'>Our Rooms</div>
               <div className='bg-orange-700 h-1 w-32' />
               <div className='bg-orange-700 h-1 w-24' />
            </div>
            <div className='flex gap-2' data-aos="zoom-out-down">
               <div className={newLocal}>
                  {rooms.map((room, index) => (
                     <div className='text-center divide-y-2 space-y-4 bg-slate-100'>
                        <div className='flex flex-col items-center justify-center gap-6 '>
                           <img src={room.img} alt='sekiller' className='w-[330px] h-[260px] object-cover' />
                           <h1 className='text-2xl font-Text2 font-light'>{room.title}</h1>
                           <small className='text-2xl inline-block'>{room.price} <small className={'opacity-40 font-bold'}>Per-night</small></small>
                        </div>
                        <button className='pb-8'>
                           {room.btn}
                        </button>
                     </div>
                  ))}
               </div>
               {/* inputlar olan sahe */}
               <div className='hidden md:flex flex-col items-start justify-center bg-blue-400  w-60 p-4' data-aos="fade-down-right">
                  <div className='flex items-center justify-center flex-col  gap-4'>
                     <h1 className='font-semibold text-lg text-white'>
                        Advanced Search
                     </h1>
                     <div className=''>
                        <input type='text' placeholder='Yaz...' className='h-full p-3' />
                     </div>
                     <div>
                        <input type='text' placeholder='Yaz...' className='h-full p-3' />
                     </div>
                     <div>
                        <input type='text' placeholder='Yaz...' className='h-full p-3' />
                     </div>
                     <div>
                        <input type='text' placeholder='Yaz...' className='h-full p-3' />
                     </div>
                     <div>
                        <input type='text' placeholder='Yaz...' className='h-full p-3' />
                     </div>
                     <div className='flex flex-col items-center justify-center'>
                        <small>2500 - 3333</small>
                        <input type='text' placeholder='Yaz...' className='h-full p-3' />
                     </div>
                     <div className='flex items-center justify-center'>
                        <button className='h-full p-3 px-20 rounded hover:bg-white hover:text-black transition-all bg-amber-800 text-white font-semibold w-full flex items-center justify-center'>Search</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/*  2. yer olan sahe  */}
         <div className=' flex flex-col items-center justify-center gap-4' data-aos="fade-down-right">
            <div className='flex gap-2'>
               <div className='flex '>
                  <div className={newLocal}>
                     {rooms.map((room, index) => (
                        <div className='text-center divide-y-2 space-y-4 bg-slate-100'>
                           <div className='flex flex-col items-center justify-center gap-6 '>
                              <img src={room.img} alt='sekiller' className='w-[330px] h-[260px] object-cover' />
                              <h1 className='text-2xl font-Text2 font-light'>{room.title}</h1>
                              <small className='text-2xl inline-block'>{room.price} <smalll className={'opacity-40 font-bold'}>Per-night</smalll></small>
                           </div>
                           <button className='pb-8'>
                              {room.btn}
                           </button>
                        </div>
                     ))}
                  </div>
               </div>
               {/* inputlar olan sahe */}
               <div className='hidden md:flex flex-col items-start justify-start bg-blue-400 p-4  w-60 pr-5 h-[300px]'>
                  <div className='flex items-start justify-center flex-col  gap-4 h-full'>
                     <h1 className='font-semibold text-lg text-white'>
                        Advanced Search
                     </h1>
                     <div className='flex items-center justify-center gap-3'>
                        <input type='checkbox' placeholder='Yaz...' className='h-full p-3' />
                        < RiStarSLine fill='red' />
                        < RiStarSLine fill='red' />
                        < RiStarSLine fill='red' />
                        < RiStarSLine fill='red' />
                        < RiStarSLine fill='red' />
                     </div>
                     <div className='flex items-center justify-center gap-3'>
                        <input type='checkbox' placeholder='Yaz...' className='h-full p-3' />
                        < RiStarSLine fill='red' />
                        < RiStarSLine fill='red' />
                        < RiStarSLine fill='red' />
                        < RiStarSLine fill='red' />
                        < RiStarSLine />
                     </div>
                     <div className='flex items-center justify-center gap-3'>
                        <input type='checkbox' placeholder='Yaz...' className='h-full p-3' />
                        < RiStarSLine fill='red' />
                        < RiStarSLine fill='red' />
                        < RiStarSLine fill='red' />
                        < RiStarSLine />
                        < RiStarSLine />
                     </div>
                     <div className='flex items-center justify-center gap-3'>
                        <input type='checkbox' placeholder='Yaz...' className='h-full p-3' />
                        < RiStarSLine fill='red' />
                        < RiStarSLine fill='red' />
                        < RiStarSLine />
                        < RiStarSLine />
                        < RiStarSLine />
                     </div>
                     <div className='flex items-center justify-center gap-3'>
                        <input type='checkbox' placeholder='Yaz...' className='h-full p-3' />
                        < RiStarSLine fill='red' />
                        < RiStarSLine />
                        < RiStarSLine />
                        < RiStarSLine />
                        < RiStarSLine />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* Ekran kicilende gorunen inputlar */}
         <div className='flex md:hidden flex-wrap gap-4 items-center justify-center'>
            <div className=' flex-col items-start justify-center bg-blue-400  w-60 p-4'>
               <div className='flex items-center justify-center flex-col  gap-4'>
                  <h1 className='font-semibold text-lg text-white'>
                     Advanced Search
                  </h1>
                  <div className=''>
                     <input type='text' placeholder='Yaz...' className='h-full p-3' />
                  </div>
                  <div>
                     <input type='text' placeholder='Yaz...' className='h-full p-3' />
                  </div>
                  <div>
                     <input type='text' placeholder='Yaz...' className='h-full p-3' />
                  </div>
                  <div>
                     <input type='text' placeholder='Yaz...' className='h-full p-3' />
                  </div>
                  <div>
                     <input type='text' placeholder='Yaz...' className='h-full p-3' />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                     <small>2500 - 3333</small>
                     <input type='text' placeholder='Yaz...' className='h-full p-3' />
                  </div>
                  <div className='flex items-center justify-center'>
                     <button className='h-full p-3 px-20 rounded hover:bg-white hover:text-black transition-all bg-amber-800 text-white font-semibold w-full flex items-center justify-center'>Search</button>
                  </div>
               </div>
            </div>
            {/* 2. input */}
            <div className='flex flex-col items-start justify-start bg-blue-400 p-4  w-60 pr-5 h-full '>
               <div className='flex items-start justify-center flex-col  gap-4 h-full'>
                  <h1 className='font-semibold text-lg text-white'>
                     Advanced Search
                  </h1>
                  <div className='flex items-center justify-center gap-3'>
                     <input type='checkbox' placeholder='Yaz...' className='h-full p-3' />
                     < RiStarSLine fill='red' />
                     < RiStarSLine fill='red' />
                     < RiStarSLine fill='red' />
                     < RiStarSLine fill='red' />
                     < RiStarSLine fill='red' />
                  </div>
                  <div className='flex items-center justify-center gap-3'>
                     <input type='checkbox' placeholder='Yaz...' className='h-full p-3' />
                     < RiStarSLine fill='red' />
                     < RiStarSLine fill='red' />
                     < RiStarSLine fill='red' />
                     < RiStarSLine fill='red' />
                     < RiStarSLine />
                  </div>
                  <div className='flex items-center justify-center gap-3'>
                     <input type='checkbox' placeholder='Yaz...' className='h-full p-3' />
                     < RiStarSLine fill='red' />
                     < RiStarSLine fill='red' />
                     < RiStarSLine fill='red' />
                     < RiStarSLine />
                     < RiStarSLine />
                  </div>
                  <div className='flex items-center justify-center gap-3'>
                     <input type='checkbox' placeholder='Yaz...' className='h-full p-3' />
                     < RiStarSLine fill='red' />
                     < RiStarSLine fill='red' />
                     < RiStarSLine />
                     < RiStarSLine />
                     < RiStarSLine />
                  </div>
                  <div className='flex items-center justify-center gap-3'>
                     <input type='checkbox' placeholder='Yaz...' className='h-full p-3' />
                     < RiStarSLine fill='red' />
                     < RiStarSLine />
                     < RiStarSLine />
                     < RiStarSLine />
                     < RiStarSLine />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default RoomsInputs