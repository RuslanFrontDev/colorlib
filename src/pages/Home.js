import React from 'react';
import Home1 from '../components/home/home1/Home1';
import VideoPlayer from '../components/home/VideoPlayer';
import Reklamlar from '../components/home/Reklamlar';
import Rooms from '../components/home/Rooms';
import NumberMovie from '../components/home/NumberMovie';
import SwiperSlide from '../components/home/SwiperSlide';
import InstagramImage from '../components/home/InstagramImage';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div className=' w-full h-full'>
     
      <Home1 />
      <div className='container mx-auto mt-5'>
        <VideoPlayer />
      </div>
      <div className='container mx-auto'>
        <Reklamlar />
      </div>
      <div className='container mx-auto sm:w-[1000px] mt-12'>
        <Rooms />
      </div>
      <div className=' h-56 mt-10'>
        <NumberMovie />
      </div>
      <div className=' container mx-auto sm:w-[1000px] h-[400px]'>
        <SwiperSlide />
      </div>
      <div className=''>
      <div className={'flex items-center justify-center mb-5'}>
          <p className={'text-4xl font-semibold text-red-500 font-Text2'}>Instagram</p>
        </div>
        <InstagramImage />
      </div>
    </div>
  );
};

export default Home;
