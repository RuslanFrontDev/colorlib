import React from 'react'

const RestaurantsMelumat = () => {
  return (
   <div className='container mt-5 mx-auto w-[43%] md:w-[100%]   h-full flex flex-col md:flex-row gap-2 items-center justify-evenly'>
      {/* 1.div---- vide ucun react-html5video */}
      <div className='w-[455px] h-[506px] ' data-aos="flip-right">
       <img src={'../../img/qiz.jpg'} alt='qiz' className='h-full object-cover'/>
      </div>
      {/* 2.div */}
      <div className='w-[390px] ' data-aos="fade-down-right">
        <small className='inline-block mb-8 opacity-50' >Welcome to Deluxe Hotel</small>
        <h4 className='text-4xl font-bold tracking-tight pb-5'>Welcome To Our Hotel</h4>
        <p className='overflow-hidden h-full  flex flex-col gap-3'>
          <small className='text-[14px] opacity-50 font-bold'>
            On her way she met a copy. The copy warned the Little Blind Text,
            that where it came from it would have been rewritten a thousand times
            and everything that was left from its origin would be the word "and"
            and the Little Blind Text should turn around and return to its own, safe country.
            But nothing the copy said could convince her and so it didn’t take long until a few insidious
            Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency,
            where they abused her for their.
          </small>

          <small className='text-[14px] opacity-50 font-bold'>
            When she reached the first hills of the Italic Mountains,
            she had a last view back on the skyline of her hometown Bookmarksgrove,
            the headline of Alphabet Village and the subline of her own road, the Line Lane.
            Pityful a rethoric question ran over her cheek, then she continued her way.
          </small>
        </p>
      </div>
    </div>
  )
}

export default RestaurantsMelumat