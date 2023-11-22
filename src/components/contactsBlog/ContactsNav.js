import React from 'react'
import ContactsNavbar from '../navbarpageslinks/ContactsNavbar'

const ContactsNav = () => {
   const sekil = "../../img/bg_1.jpg.webp"
  return (
   <div className='h-full w-full relative'>
   <img src={sekil} alt='sekil' className='h-full w-full object-cover' />
   <div className='absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-between container mx-auto sm:w-[540px] h-[80px]'>
      <ContactsNavbar />
   </div>
</div>
  )
}

export default ContactsNav