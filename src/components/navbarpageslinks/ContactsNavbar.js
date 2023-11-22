import React from 'react'
import { Link } from 'react-router-dom'

const ContactsNavbar = () => {
   return (
      <div className='flex flex-col items-center justify-between h-[73px] w-[430px] sm:w-full'>
         <div className='flex items-center justify-between mb-24'>

            <div className='flex items-center justify-center mx:justify-between gap-48 w-full'>
               <Link to={'home'} className='hidden md:block md:mx-auto mr-10 font-bold uppercase font-Deluxe text-[20px] text-white'>
                  Deluxe
               </Link>
               <nav className='flex items-center justify-center gap-4 text-white whitespace-pre'>
                  <Link to={"/"}>Home</Link>
                  <Link to={"/rooms"}>Rooms</Link>
                  <Link to={"/restaurants"}>Restaurants</Link>
                  <Link to={"/about"}>About</Link>
                  <Link to={"/blog"}>Blog</Link>
                  <Link to={"/contact"}>Contact</Link>
               </nav>
            </div>
         </div>
         <div className='flex flex-col text-white items-center justify-center gap-5'>
            <div className='flex items-center justify-center gap-x-4'>
               <div className='text-sm font-semibold text-white'>Home</div>
               <div className='text-sm opacity-60 font-semibold text-white'>Contact</div>
            </div>
            <div className='text-5xl font-Text2 font-bold text-white'>Contact</div>
         </div>
      </div>
   )
}

export default ContactsNavbar