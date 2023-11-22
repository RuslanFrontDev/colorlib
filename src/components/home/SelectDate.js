import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Listbox } from '@headlessui/react'
import { AiFillCaretDown } from 'react-icons/ai';
const rooms = [
   { id: 1, name: 'Suite', unavailable: false },
   { id: 2, name: 'Family Room', unavailable: false },
   { id: 3, name: 'Delixe Room', unavailable: false },
   { id: 4, name: 'Classic Room', unavailable: true },
   { id: 5, name: 'Superior Room', unavailable: false },
   { id: 6, name: 'Luruxy Room', unavailable: false },
]
const customer = [
   { id: 1, name: 'Adult', unavailable: false },
   { id: 2, name: 'Adult', unavailable: false },
   { id: 3, name: 'Adult', unavailable: false },
   { id: 4, name: 'Adult', unavailable: true },
   { id: 5, name: 'Adult', unavailable: false },
   { id: 6, name: 'Adult', unavailable: false },
]
const SelectDate = () => {
   const [startDate, setStartDate] = useState(new Date());
   const [endDate, setEndDate] = useState(new Date());
   const [selectedPerson, setSelectedPerson] = useState(rooms[0])
   const [selectedCustomer, setSelectedCustomer] = useState(customer[0])
   const handleChange = (range) => {
      const [startDate, endDate] = range;
      setStartDate(startDate);
      setEndDate(endDate);
   };

   return (
      <>
         <div className='hidden md:flex  flex-col xl:flex-row space-x-1 w-[800px] sm:w-full items-center justify-center'>
            {/* date--1111 */}
            <div className='flex md:flex-row  items-center flex-nowrap space-x-2 justify-center '>
               <div className="space-y-4 bg-white flex  items-start justify-start flex-col p-2 lg:p-4 ">
                  <label className=' font-medium text-[15px] text-[#8d703b] uppercase tracking-wider'>CHECK-IN DATE</label>
                  <div className="w-40 md:w-56">
                     <DatePicker
                        selected={startDate}
                        onChange={handleChange}
                        startDate={startDate}
                        endDate={endDate}
                        selectsRange
                        className="w-full p-1 border border-gray-300 rounded border-none outline-none flex flex-1"
                     />
                  </div>
               </div>
               {/* date-----222222 */}
               <div className="space-y-4 bg-white flex items-start justify-start flex-col p-2 lg:p-4">
                  <label className=' font-medium text-[15px] text-[#8d703b] uppercase tracking-wider'>CHECK-IN DATE</label>
                  <div className="w-40 md:w-56">
                     <DatePicker
                        selected={startDate}
                        onChange={handleChange}
                        startDate={startDate}
                        endDate={endDate}
                        selectsRange
                        className="w-full p-1 border border-gray-300 rounded border-none outline-none flex flex-1"
                     />
                  </div>
               </div>
               {/* SelectBox */}
               <div className={"relative flex items-center justify-center flex-col bg-white p-2 lg:p-4 w-45"} >
                  <label className=' font-medium text-[15px] text-[#8d703b] uppercase tracking-wider'>Room</label>
                  <Listbox value={selectedPerson} onChange={setSelectedPerson} >
                     <div className='flex items-start justify-start space-x-2 relative'>
                        <div>
                           <Listbox.Button className={'pt-[25px] w-[60px] md:w-[85px] text-center'}>{selectedPerson.name}</Listbox.Button>
                           <Listbox.Options className={"absolute top-16 border bg-slate-100 rounded flex flex-col  flex-nowrap whitespace-nowrap "}>
                              {rooms.map((person) => (
                                 <Listbox.Option
                                    key={person.id}
                                    value={person}
                                    disabled={person.unavailable}
                                    className={"text-black w-full"}
                                 >
                                    {person.name}
                                 </Listbox.Option>
                              ))}
                           </Listbox.Options>
                        </div>
                        <small className='absolute top-8 left-9 md:left-14 pointer-events-none'><AiFillCaretDown /></small>
                     </div>
                  </Listbox>
               </div>
               {/* SelectBox-------2222222*/}
               <div className={"relative flex items-center justify-center flex-col bg-white p-2 lg:p-4"} >
                  <label className=' font-medium text-[15px] text-[#8d703b] uppercase tracking-wider'>Customer</label>
                  <Listbox value={selectedCustomer} onChange={setSelectedCustomer} >
                     <div className='flex items-start justify-start space-x-2 relative'>
                        <div>
                           <Listbox.Button className={'pt-[25px] w-[45px] text-center'}>{selectedCustomer.name}</Listbox.Button>
                           <Listbox.Options className={"absolute top-16 border w-[100px] bg-slate-100 rounded flex flex-col  flex-nowrap whitespace-nowrap "}>
                              {customer.map((person) => (
                                 <Listbox.Option
                                    key={person.id}
                                    value={person}
                                    disabled={person.unavailable}
                                    className={"text-black w-full"}
                                 >
                                    {person.name}
                                 </Listbox.Option>
                              ))}
                           </Listbox.Options>
                        </div>
                        <small className='absolute top-8 left-8 pointer-events-none'><AiFillCaretDown /></small>
                     </div>
                  </Listbox>
               </div>
            </div>
            <div className='flex items-center justify-center md:w-[550px] text-center h-full '>
               <button className='bg-[#8d703b] p-6 lg:p-10 w-full  h-full text-center '>
                  <label className=' font-medium text-[15px] text-[#fff] uppercase tracking-wider '>Check Availabity</label>
               </button>
            </div>
         </div>

      </>
   );
};

export default SelectDate;
