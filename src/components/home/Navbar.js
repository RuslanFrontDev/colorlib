import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
 <>
    <div className='hidden md:flex items-center justify-between h-[73px] w-[430px] sm:w-full'>
      <Link to={'home'} className='hidden sm:block font-bold uppercase font-Deluxe text-[20px] text-white'>
         Deluxe
      </Link>
      <div>
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
    
 </>
  )
}

export default Navbar