import React, { useEffect } from 'react'
import ContactsNav from '../components/contactsBlog/ContactsNav'
import ContactInputs from '../components/contactsBlog/ContactsNav'
import ContactAdress from '../components/contactsBlog/ContactAdress'
import Qeydiyyat from '../components/contactsBlog/Qeydiyyat'
import { BiCategory } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { setNavbarClick } from '../redux/navbarMenuSlice'
// Aos hereketler vermek
import Aos from 'aos';
import 'aos/dist/aos.css';
const Contact = () => {
    // Aos hereketleri
  useEffect(()=>{
   Aos.init();
 },[])
   const dispatch = useDispatch();
   return (
      <div className='w-full mt-10 md:mt-0 mb-10'>
           {/* sabit navbar. burada ekran kicilende button ile click edirik */}
           <div className=' bg-red-500 w-full h-24 flex items-center justify-center md:hidden fixed top-0 z-40'>
            <div className='container mx-auto flex items-center justify-between'>
               <p className='text-2xl font-bold opacity-70 text-slate-400 ml-8'>Deluxe</p>
               <button type='button' className='mr-8 text-2xl font-bold' onClick={() => dispatch(setNavbarClick())}>
                  <BiCategory />
               </button>
            </div>
         </div>
         <div className='h-[300px]' data-aos="fade-left">
            <ContactsNav/>
         </div>
         <div className='container w-[330px] sm:w-[1100px]  mx-auto flex items-start justify-start mt-16 mb-5'>
            <ContactAdress/>
         </div>
         <div className='container w-[330px] sm:w-[1000px] mx-auto flex items-start justify-start mt-16'>
            <Qeydiyyat/>
         </div>
      </div>
   )
}

export default Contact