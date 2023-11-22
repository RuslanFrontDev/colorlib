import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Rooms from './pages/Rooms'
import Restaurants from './pages/Restaurants'
import Contact from './pages/Contact'
import NotFound from './components/notfound/NotFound'
// redux toolkit
import { useDispatch, useSelector } from 'react-redux'
import { setNavbarClick } from './redux/navbarMenuSlice'

const App = () => {
  // sabit Menu true false-a cekmek
  const menu = useSelector((state) => state.menu.navbarClick);
  const dispatch = useDispatch();
  return (
    <div className='h-full w-full '>
      <div className='relative'>
        {menu && <div className='bg-black w-[300px] h-full absolute z-30 mt-24 pl-5 flex md:hidden'>
          <div className=' flex items-center justify-between fixed top-25'>
            <div className='text-white flex flex-col gap-5 absolute top-0'>
              <Link to={"/"}>Home</Link>
              <Link to={"/rooms"}>Rooms</Link>
              <Link to={"/restaurants"}>Restaurants</Link>
              <Link to={"/about"}>About</Link>
              <Link to={"/blog"}>Blog</Link>
              <Link to={"/contact"}>Contact</Link>
            </div>
            <button type='button' onClick={ () => dispatch(setNavbarClick())} className='absolute top-1 -right-64 bg-red-500 w-10 h-10 rounded-full flex items-center justify-center'>X</button>
          </div>
        </div>}
        <div className='overflow-x-hidden'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/rooms' element={<Rooms />} />
            <Route path='/restaurants' element={<Restaurants />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
        <div className='h-full'>
          <Footer />
        </div>
      </div>
    </div>

  )
}

export default App