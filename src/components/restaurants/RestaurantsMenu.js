import React from 'react'

export const RestaurantsMenu = () => {
   const menus = [
      {
         "img": '../../../img/menu.jpg',
         "menumuz": "Grilled Beef with potatoes",
         "qiymet": "$20.00",
         "haqqinda": "  A small river named Duden flows by their place and supplies"
      },
      {
         "img": '../../../img/menu.jpg',
         "menumuz": "Grilled Beef with potatoes",
         "qiymet": "$20.00",
         "haqqinda": "  A small river named Duden flows by their place and supplies"
      },
      {
         "img": '../../../img/menu.jpg',
         "menumuz": "Grilled Beef with potatoes",
         "qiymet": "$20.00",
         "haqqinda": "  A small river named Duden flows by their place and supplies"
      },
      {
         "img": '../../../img/menu.jpg',
         "menumuz": "Grilled Beef with potatoes",
         "qiymet": "$20.00",
         "haqqinda": "  A small river named Duden flows by their place and supplies"
      },
      {
         "img": '../../../img/menu.jpg',
         "menumuz": "Grilled Beef with potatoes",
         "qiymet": "$20.00",
         "haqqinda": "  A small river named Duden flows by their place and supplies"
      },
      {
         "img": '../../../img/menu.jpg',
         "menumuz": "Grilled Beef with potatoes",
         "qiymet": "$20.00",
         "haqqinda": "  A small river named Duden flows by their place and supplies"
      },
      {
         "img": '../../../img/menu.jpg',
         "menumuz": "Grilled Beef with potatoes",
         "qiymet": "$20.00",
         "haqqinda": "  A small river named Duden flows by their place and supplies"
      },
      {
         "img": '../../../img/menu.jpg',
         "menumuz": "Grilled Beef with potatoes",
         "qiymet": "$20.00",
         "haqqinda": "  A small river named Duden flows by their place and supplies"
      },
   ]
   return (
      <div>
         <div>
            <div className='text-center flex flex-col items-center justify-center gap-1'>
               <div className='text-3xl pb-3'>Our Menu</div>
               <div className='bg-orange-700 h-1 w-32' />
               <div className='bg-orange-700 h-1 w-24' />
            </div>
         </div>
         <div className='grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-4  justify-center place-items-center mt-16 gap-5'>
            {menus.map((menu, index) => (
               <div key={index} className='flex flex-col sm:flex-row items-center justify-center space-x-4 '>
                  <div className='w-20 h-20 lg:w-24 lg:h-24'>
                     <img src={menu.img} alt='sekil' className='w-full h-full rounded-full object-cover' />
                  </div>
                  <div className='flex flex-col items-start justify-center'>
                     <div className='flex items-center justify-center space-x-0 lg:space-x-4'>
                        <p className=' pr-0 font-Text2 font-semibold text-[24px] space-x-0 lg:space-x-2 left-2'>{menu.menumuz}</p>
                        <small className='font-bold opacity-60 text-gray-600'>..........</small>
                        <small className='font-semibold text-lg text-yellow-600'>{menu.qiymet}</small>
                     </div>
                     <div className='w-full'>
                        <p className='w-[400px] text-gray-600 opacity-50 font-semibold'>
                           {menu.haqqinda}
                        </p>
                     </div>
                  </div>
               </div>
            ))}



         </div>
      </div>
   )
}
