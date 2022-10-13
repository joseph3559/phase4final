import React from 'react';
import { AiOutlineWallet } from 'react-icons/ai'
import { HiOutlineUserCircle } from 'react-icons/hi'
import logo from '../assets/images/logo.png'
import { Link } from 'react-scroll'




const Navbar = () => {
  return (
    <div className='w-screen h-[70px] z-10 bg-slate-300 fixed drop-shadow-lg'>
      <div className='px-2 flex flex-row justify-between items-center w-full h-full'>

        <div className='flex basis-1/8 items-center'>
          <div className='flex mr-4 font-bold space-x-1'>
            <a href="/home">
            <img className='h-16' src={logo} alt="logo" />
            </a>
          </div>
        </div>

        <div className='flex justify-center items-center px-8 py-3 basis-1/2 h-[60px]'>
          <div className='relative block w-full'>
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg class="h-5 w-5 fill-blue-900" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30"
                height="30" viewBox="0 0 30 30">
                <path
                  d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
                </path>
              </svg>
            </span>
            <input type="text" className='w-full bg-white placeholder:font-italitc border border-blue-900 rounded-full py-2 pl-10 pr-4 focus:outline-none' placeholder='Search For Artist or Label' />
          </div>
        </div>

        <div className='hidden md:flex basis-3/8 font-bold items-center mx-6' >
          <ul className='flex flex-row text-xl'>
            <li className='hover:text-[#000066] border-slate-300 border rounded-2xl hover:border-[#000066]'><Link to="pricing" smooth={true} duration={500}>Explore</Link></li>
            <li className='hover:text-[#000066] border-slate-300 border rounded-2xl hover:border-[#000066]'><Link to="moringa" smooth={true} duration={500}>Stats</Link></li>
            <li className='hover:text-[#000066] border-slate-300 border rounded-2xl hover:border-[#000066]'>Resources</li>
            <li className='hover:text-[#000066] border-slate-300 border rounded-2xl hover:border-[#000066]'>Create</li>
            <li><HiOutlineUserCircle className='text-3xl hover:text-[#000066]' /></li>
            <li><AiOutlineWallet className='text-3xl hover:text-[#000066]' /></li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Navbar