import React from 'react'

const ContactAdress = () => {
   return (
      <div className='flex flex-col items-start justify-start gap-6'>
         <p className='text-3xl font-semibold font-Text2'>Contact Information</p>
         <div className='flex flex-col md:flex-row md:items-center md:justify-center items-start justify-start gap-28 ml-4 flex-wrap'>
            <div className='w-[185px] lg:w-[170px] text-lg font-semibold opacity-60'>
               Address: 198 West 21th Street, Suite 721 New York NY 10016
            </div>
            <div className='text-base font-semibold opacity-60'>
               Phone: + 1235 2355 98
            </div>
            <div className='text-base font-semibold opacity-60'>
               Email: info@yoursite.com
            </div>
            <div className='text-base font-semibold opacity-60'>
               Website yoursite.com
            </div>
         </div>
      </div>
   )
}

export default ContactAdress