import React, { useEffect } from 'react'
import RoomsNavbar from '../components/rooms/RoomsNavbar'
import InstagramImage from "../components/home/InstagramImage"
import Navbar from '../components/home/Navbar'
import RoomsInputs from '../components/rooms/RoomsInputs'
import { BiCategory } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { setNavbarClick } from '../redux/navbarMenuSlice'
// Aos hereketler vermek
import Aos from 'aos';
import 'aos/dist/aos.css';
const Rooms = () => {
  const dispatch = useDispatch();
  // Aos hereketleri
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div className=''>
      {/* sabit navbar. burada ekran kicilende button ile click edirik */}
      <div className=' bg-red-500 w-full h-24 flex items-center justify-center md:hidden fixed top-0 z-40'>
        <div className='container mx-auto flex items-center justify-between'>
          <p className='text-2xl font-bold opacity-70 text-slate-400 ml-8'>Deluxe</p>
          <button type='button' className='mr-8 text-2xl font-bold' onClick={() => dispatch(setNavbarClick())}>
            <BiCategory />
          </button>
        </div>
      </div>
      <div className='h-[300px] mt-10 md:mt-0 mb-5' data-aos="fade-left">
        <RoomsNavbar />
      </div>
      <div className=' '  >
        <RoomsInputs />
      </div>
      <div className='mt-20'>
        <div className={'flex items-center justify-center mb-5'}>
          <p className={'text-4xl font-semibold text-red-500 font-Text2'}>Instagram</p>
        </div>
        <InstagramImage/>
      </div>
    </div>
  )
}

export default Rooms