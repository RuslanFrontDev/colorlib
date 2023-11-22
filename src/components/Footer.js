import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <div className=' h-full bg-black text-white  flex items-start justify-start'>
      <div className='container mx-auto mb-10 w-[1200px] flex items-start justify-start  flex-wrap space-x-4 mt-10'>
        {/* 1. */}

        <div className='mt-11'>
          <div className=''>
            <div className='mb-5'>
              <h2 className='font-semibold font-Text2 text-2xl'>Deluxe Hotel</h2>
            </div>
          </div>
          <div>
            <p className='w-56 opacity-75'>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className='mt-5 flex items-start text-2xl justify-start gap-3'>
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
          </div>
        </div>
        {/* 2. */}
        <div>
          <div>
            <div className='mb-5 mt-10'>
              <h2 className='font-semibold font-Text2 text-2xl'>Deluxe Hotel</h2>
            </div>
          </div>
          <div className=' mb-10 flex flex-col gap-4'>
            <div>
              <Link to={'/blog'} className='opacity-75'>Blog
              </Link>
            </div>
            <div>
              <Link to={'/restaurants'} className='opacity-75'>Restaurants
              </Link>
            </div>
            <div>
              <Link to={'/amenties'} className='opacity-75'>Amenities
              </Link>
            </div>
            <div>
              <Link to={'/contact'} className='opacity-75'>Contact</Link>
            </div>
          </div>
        </div>
        {/* 3. */}
        <div>
          <div>
            <div className='mb-5 mt-10'>
              <h2 className='font-semibold font-Text2 text-2xl'>Deluxe Hotel</h2>
            </div>
          </div>
          <div className=' mb-10 flex flex-row sm:flex-col gap-4'>
            <div>
              <div className='opacity-75'>Career
              </div>
            </div>
            <div>
              <div className='opacity-75'>About Us
              </div>
            </div>
            <div>
              <div className='opacity-75'>Contact Us
              </div>
            </div>
            <div>
              <div className='opacity-75'>Services</div>
            </div>
          </div>
        </div>
        {/* 4. */}
        <div>
          <div>
            <div className='mb-5 mt-10'>
              <h2 className='font-semibold font-Text2 text-2xl'>Deluxe Hotel</h2>
            </div>
          </div>
          <div className=' mb-10 flex flex-row md:flex-col gap-0 md:gap-4'>
            <div>
              <div className='opacity-75'>Career
              </div>
            </div>
            <div>
              <di className='opacity-75'>About Us
              </di>
            </div>
            <div>
              <div className='opacity-75'>Contact Us
              </div>
            </div>
            <div>
              <div className='opacity-75'>Services</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer