import React, { useEffect } from 'react'
import RestaurantsNavbar from '../components/restaurants/RestaurantsNavbar'
import RoomsInputs from '../components/rooms/RoomsInputs'
import RestaurantsMelumat from '../components/restaurants/RestaurantsMelumat'
import { RestaurantsMenu } from '../components/restaurants/RestaurantsMenu'
import { BiCategory } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { setNavbarClick } from '../redux/navbarMenuSlice'
// Aos hereketler vermek
import Aos from 'aos';
import 'aos/dist/aos.css';
const Restaurants = () => {
   const dispatch = useDispatch();
     // Aos hereketleri
  useEffect(()=>{
   Aos.init();
 },[])
   return (
      <div className='mt-10 md:mt-0'>
         {/* sabit navbar. burada ekran kicilende button ile click edirik */}
         <div className=' bg-red-500 w-full h-24 flex items-center justify-center md:hidden fixed top-0 z-40'>
            <div className='container mx-auto flex items-center justify-between'>
               <p className='text-2xl font-bold opacity-70 text-slate-400 ml-8'>Deluxe</p>
               <button type='button' className='mr-8 text-2xl font-bold' onClick={() => dispatch(setNavbarClick())}>
                  <BiCategory />
               </button>
            </div>
         </div>
         <div className='h-[300px] '  data-aos="fade-left">
            <RestaurantsNavbar />
         </div>
         <div className=' '>
            <RestaurantsMelumat />
         </div>
         <div className='mt-20 mb-8' data-aos="zoom-in">
            <RestaurantsMenu />
         </div>
      </div>
   )
}

export default Restaurants