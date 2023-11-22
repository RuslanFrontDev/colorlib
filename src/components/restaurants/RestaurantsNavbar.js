import React from 'react'
import Navbar from '../home/Navbar'
import NavbarPageLinks from '../navbarpageslinks/NavbarPageLinks'
import RestaurantsPageLinks from '../navbarpageslinks/RestaurantsPageLinks'
const RoomsNavbar = () => {
   const sekil = "../../img/menu.jpg"
   return (
      <div className='h-full w-full relative'>
         <img src={sekil} alt='sekil' className='h-full w-full object-cover' />
         <div className='absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-between container mx-auto sm:w-[1000px] h-[80px]'>
            <RestaurantsPageLinks />
         </div>
      </div>
   )
}

export default RoomsNavbar