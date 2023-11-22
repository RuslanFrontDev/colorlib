import React from 'react'
import { BiCategory } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setNavbarClick } from '../../redux/navbarMenuSlice'
const NotFound = () => {
  const dispatch = useDispatch()
  return (
    <div className='mt-10'>
       {/* sabit navbar. burada ekran kicilende button ile click edirik */}
       <div className=' bg-red-500 w-full h-24 flex items-center justify-center md:hidden fixed top-0 z-40'>
        <div className='container mx-auto flex items-center justify-between'>
          <p className='text-2xl font-bold opacity-70 text-slate-400 ml-8'>Deluxe</p>
          <button type='button' className='mr-8 text-2xl font-bold' onClick={ () => dispatch(setNavbarClick())}>
            <BiCategory />
          </button>
        </div>
      </div>
    <div className='h-[400px] w-full bg-slate-100 flex  items-center justify-center font-bold text-4xl'>Sehife tapilmadi!!! Ana Menuya qayıdın <Link className='bg-blue-500 p-2 rounded ml-5 text-white' to={'/'}>Home</Link></div>

    </div>
  )
}

export default NotFound