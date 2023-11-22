
import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Listbox } from '@headlessui/react'
import { AiFillCaretDown } from 'react-icons/ai';
import SelectDate from '../SelectDate';
import { BiCategory } from "react-icons/bi";
// redux toolkit import edirik
import { useSelector, useDispatch } from 'react-redux'
import {setNavbarClick } from '../../../redux/navbarMenuSlice';
// Aos hereketler vermek
import Aos from 'aos';
import 'aos/dist/aos.css';
// 222.............................
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
// ...........................................................
const Home1 = () => {
  const images = [
    'bg-denizImage',
    'bg-istirahetImage',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scale, setScale] = useState(98);
  const [textIndex, setTextIndex] = useState(0);
  const [textIndex2, setTextIndex2] = useState(0);
  const texts = ["Welcome to Deluxe", "Enjoy A Luxuary Experience"];
  const texts2 = ["Hotels && Resorts", "Join with us"];
  // image change
  useEffect(() => {
    const changeBackgroundImage = () => {
      setCurrentImageIndex((currentImageIndex) => (currentImageIndex + 1) % images.length);
      if (currentImageIndex > 0) {
        setCurrentImageIndex(0) || setCurrentImageIndex(1)
      }

      // Resim değiştiğinde, scale'i 90'a sıfırla
      setScale(98);
    };

    const intervalId = setInterval(changeBackgroundImage, 2350); // Her saniye bir değiştir

    return () => {
      clearInterval(intervalId); // Komponent temizlendiğinde interval'i temizle
    };
  }, [images.length]);
  // text1 Change
  useEffect(() => {
    const changeText = () => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    };

    const intervalId = setInterval(changeText, 2350); // Her saniye bir değiştir

    return () => {
      clearInterval(intervalId); // Komponent temizlendiğinde interval'i temizle

    };
  }, [texts.length]);
  // text2 Change
  useEffect(() => {
    const changeText = () => {
      setTextIndex2((prevIndex) => (prevIndex + 1) % texts.length);
    };

    const intervalId = setInterval(changeText, 2350); // Her saniye bir değiştir

    return () => {
      clearInterval(intervalId); // Komponent temizlendiğinde interval'i temizle

    };
  }, [texts.length]);
  //  Scale change
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Scale değerini artır, örneğin her saniyede 2 birim artırabilirsin
      setScale((prevScale) => (prevScale + 3));
    }, 1000); // Her saniye bir değiştir

    return () => {
      clearInterval(intervalId); // Komponent temizlendiğinde interval'i temizle
    };
  }, []);

  const backgroundImageStyle = {
    transform: `scale(${scale}%)`,
  };
  // 2222..........................................................................
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedPerson, setSelectedPerson] = useState(rooms[0])
  const [selectedCustomer, setSelectedCustomer] = useState(customer[0])
  const handleChange = (range) => {
    const [startDate, endDate] = range;
    setStartDate(startDate);
    setEndDate(endDate);
  };
  // Aos hereketleri
  useEffect(()=>{
    Aos.init();
  },[])
  // sabit navbar
  const dispatch = useDispatch();
  return (
    <div className='' >
      
      {/* sabit navbar. burada ekran kicilende button ile click edirik */}
      <div className=' bg-red-500 w-full h-24 flex items-center justify-center md:hidden fixed top-0 z-40'>
        <div className='container mx-auto flex items-center justify-between'>
          <p className='text-2xl font-bold opacity-70 text-slate-400 ml-8'>Deluxe</p>
          <button type='button' className='mr-8 text-2xl font-bold' onClick={ () => dispatch(setNavbarClick())}>
            <BiCategory />
          </button>
        </div>
      </div>
     
      {/* .................................................................... */}
      <div className='h-[490px] md:h-[700px] overflow-hidden'>
        <div style={backgroundImageStyle} className={`animate-fadeIn ${images[currentImageIndex]} h-[490px] md:h-[600px] overflow-hidden transition  duration-800 transform bg-no-repeat bg-cover`}>
        </div>
        <div  className='container mx-auto w-[380px] md:w-[570px] lg:w-[1010px] absolute top-0 left-1/2 -translate-x-1/2  z-10 flex  flex-col items-center justify-start gap-10 mt-40 md:mt-0'>
          <Navbar />
          <div className='flex items-center justify-center flex-col mb-10' data-aos = "fade-right">
            <h1 className='text-center font-Text text-[30px] md:text-[55px] lg:text-[65px] font-bold md:whitespace-nowrap  text-white'>{texts[textIndex]}</h1>
            <h2 className='flex items-center justify-center flex-row font-Text2 text-[24px] md:text-[55px] lg:text-[80px] font-extralight text-white'><div className='w-[50px] md:w-[120px] lg:w-[200px] flex items-center justify-center flex-1 bg-white font-thin h-[3px]' /><small className='flex items-center justify-center h-[3px] text-[24px] sm:text-[34px]'>{texts2[textIndex2]}</small><div className='w-[50px] md:w-[120px] lg:w-[200px] flex items-center justify-center flex-1 bg-white font-thin h-[3px]' /></h2>
          </div>
          <SelectDate />
        </div>

      </div>
      {/* 2222......................................................................... */}
      <div className='flex md:hidden  flex-col xl:flex-row space-x-1 w-[400px] sm:w-full items-start justify-start'>
        {/* date--1111 */}
        <div className='flex flex-col  items-start flex-nowrap space-x-2 justify-start '>
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
              <div className='flex items-start justify-start space-x-2 relative z-30'>
                <div className=' z-30'>
                  <Listbox.Button className={'pt-[25px] w-[60px] md:w-[85px] text-center z-30'}>{selectedPerson.name}</Listbox.Button>
                  <Listbox.Options className={"absolute top-16 border bg-slate-100 rounded flex flex-col  flex-nowrap whitespace-nowrap  z-30"}>
                    {rooms.map((person) => (
                      <Listbox.Option
                        key={person.id}
                        value={person}
                        disabled={person.unavailable}
                        className={"text-black w-full z-30 cursor-pointer"}
                      >
                        {person.name}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
                <small className='absolute top-8 left-12 pointer-events-none'><AiFillCaretDown /></small>
              </div>
            </Listbox>
          </div>
          {/* SelectBox-------2222222*/}
          <div className={"relative flex items-center justify-center flex-col bg-white p-2 lg:p-4 mt-10"} >
            <label className=' font-medium text-[15px] text-[#8d703b] uppercase tracking-wider'>Customer</label>
            <Listbox value={selectedCustomer} onChange={setSelectedCustomer} >
              <div className='flex items-start justify-start space-x-2 relative'>
                <div>
                  <Listbox.Button className={'pt-[25px] w-[45px] text-center z-10'}>{selectedCustomer.name}</Listbox.Button>
                  <Listbox.Options className={"absolute top-16 border w-[100px] cursor-pointer bg-slate-100 rounded flex flex-col  flex-nowrap whitespace-nowrap z-10"}>
                    {customer.map((person) => (
                      <Listbox.Option
                        key={person.id}
                        value={person}
                        disabled={person.unavailable}
                        className={"text-black w-full z-10 cursor-pointer"}
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
        <div className='flex items-center justify-center md:w-[550px] text-center h-full'>
          <button className='bg-[#8d703b] p-6 lg:p-4 w-full  h-full text-center'>
            <label className=' font-medium text-[15px] text-[#fff] uppercase tracking-wider'>Check Availabity</label>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home1