import React from 'react'

const Qeydiyyat = () => {
   return (
      <div className='flex flex-col md:flex-row items-center justify-center space-x-14'>
         <div className='w-[330px] md:w-[530px] h-[560px] bg-slate-300 flex items-center justify-center flex-col gap-3'>
            <div className='bg-slate-500 rounded-full w-12 h-12 flex items-center justify-center'>
               <small className='text-2xl font-semibold'>!</small>
            </div>
            <div>
               <p className='text-2xl font-semibold text-center'>Oops! Something went wrong.</p>
            </div>
            <div className='w-[350px] md:w-[450px] text-center'>
               <small className=''>
                  This page didn't load Google Maps correctly. See the JavaScript console for technical details.
               </small>
            </div>
         </div>
         <div className='flex flex-col items-center justify-center gap-6'>
            <div className='w-full'>
               <input type='text' placeholder='Your Name' className='flex-1 w-full h-11 px-2' />
            </div>
            <div className='w-full'>
               <input type='email' placeholder='Your Name' className='flex-1 w-full h-11 px-2' />
            </div>
            <div className='w-full'>
               <input type='text' placeholder='Your Name' className='flex-1 w-full h-11 px-2' />
            </div>
            <div className='w-full'>
               <textarea rows="9" cols="50" placeholder='Your Name' className='flex-1 w-full h-11 px-2'>

               </textarea>
            </div>
            <div className='px-6 py-3 bg-amber-500 flex items-center justify-center rounded-3xl'>
               <button className='text-2xl  font-semibold'>Gonder</button>

            </div>
         </div>
      </div>
   )
}

export default Qeydiyyat