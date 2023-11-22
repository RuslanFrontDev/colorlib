import React from 'react'
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
   {
      "img": "../../img/room1.jpg",
      "title": "Classic Rooms",
      "price": "$200.000",
      "btn": "View Room Details ->>"
   },
   {
      "img": "../../img/room1.jpg",
      "title": "Superior Room",
      "price": "$150.000",
      "btn": "View Room Details ->>"
   },
   {
      "img": "../../img/room1.jpg",
      "title": "Luxury Rooms",
      "price": "$40.000",
      "btn": "View Room Details ->>"
   }
]
const Rooms = () => {
   const newLocal = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 '
   return (
      <div className=' flex flex-col items-center justify-center gap-4' data-aos="zoom-out-down">
         <div className='text-center flex flex-col items-center justify-center gap-1'>
            <div className='text-3xl pb-3'>Our Rooms</div>
            <div className='bg-orange-700 h-1 w-32' />
            <div className='bg-orange-700 h-1 w-24' />
         </div>
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
   )
}

export default Rooms