import React, { useEffect, useMemo, useRef, useState } from 'react'

const NumberMovie = () => {
   const [number, setNumber] = useState(0);
   const [number1, setNumber1] = useState(0);
   const [number2, setNumber2] = useState(0);
   const [number3, setNumber3] = useState(0);

   // 1. time
   const timeoutID = useRef(null);
   useEffect(() => {
      timeoutID.current = setTimeout(() => {
         if (number > 49999) {
            // clear interval
            clearTimeout(timeoutID.current);
            timeoutID.current = null;
            return;
         }
         setNumber((value) => value + 1);
      }, 10);

      return () => clearTimeout(timeoutID.current);
   }, [number]);
   // .......................................
   // 2. time
   const timeoutID1 = useRef(null);
   useEffect(() => {
      timeoutID1.current = setTimeout(() => {
         if (number1 > 4999) {
            // clear interval
            clearTimeout(timeoutID1.current);
            timeoutID1.current = null;
            return;
         }
         setNumber1((value) => value + 1);
      }, 10);

      return () => clearTimeout(timeoutID1.current);
   }, [number1]);
   // .......................................
   //  3. time
   const timeoutID12 = useRef(null);
   useEffect(() => {
      timeoutID12.current = setTimeout(() => {
         if (number2 > 2999) {
            // clear interval
            clearTimeout(timeoutID12.current);
            timeoutID1.current = null;
            return;
         }
         setNumber2((value) => value + 1);
      }, 1);

      return () => clearTimeout(timeoutID12.current);
   }, [number2]);
   // ..........................................
   // 4. time
   const timeoutID13 = useRef(null);
   useEffect(() => {
      timeoutID13.current = setTimeout(() => {
         if (number3 > 99) {
            // clear interval
            clearTimeout(timeoutID13.current);
            timeoutID1.current = null;
            return;
         }
         setNumber3((value) => value + 1);
      }, 10);

      return () => clearTimeout(timeoutID13.current);
   }, [number3]);
   return (
      <div className=' flex flex-wrap bg-amber-600 '>
         <div className='container mx-auto flex h-44 items-center justify-evenly '>
            <div className='text-white font-bold text-2xl flex flex-col items-center justify-center gap-3'>{number}  <small className='opacity-40 font-bold'>Happy Guest</small></div>
            <div className='text-white font-bold text-2xl flex flex-col items-center justify-center gap-3'>{number1} <small className='opacity-40 font-bold'>Rooms</small></div>
            <div className='text-white font-bold text-2xl flex flex-col items-center justify-center gap-3'>{number2} <small className='opacity-40 font-bold'>Stafs</small></div>
            <div className='text-white font-bold text-2xl flex flex-col items-center justify-center gap-3'>{number3} <small className='opacity-40 font-bold'>Destination</small></div>
         </div>
      </div>
   );
}

export default NumberMovie