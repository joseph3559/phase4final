import React from 'react'
import logo from '../assets/images/logo.png'
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full mt-40 text-gray-300 pt-20 px-2'>
      <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
        <div>
          <div className='flex flex-col'>
            <img src={logo} alt="MusicInfo logo" />
            <div className='mt-8 mb-4'>
              <span className='text-sm no-underline overflow-ellipsis bg-none'>GET THE MOBILE APP</span>
            </div>
            <div className='flex flex-row gap-2'>
              <a href="/"><img alt="/" src="https://songstats.com/files/app-store-badge.svg" className='w-28 h-8 mr-3 overflow-hidden' /></a>
              <a href="/"><img alt="/" src="https://songstats.com/files/google-play-badge.svg" className='w-28 h-8 mr-3 overflow-hidden' /></a>
            </div>
          </div>
        </div>
        <div className=' ml-5'>
          <h6 className='font-bold uppercase pt-2'>Support</h6>
          <ul>
            <li className='py-1'>Pricing</li>
            <li className='py-1'>Documentation</li>
            <li className='py-1'>Guides</li>
            <li className='py-1'>API Status</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercase pt-2'>Company</h6>
          <ul>
            <li className='py-1'>About</li>
            <li className='py-1'>Blog</li>
            <li className='py-1'>Jobs</li>
            <li className='py-1'>Press</li>
            <li className='py-1'>Partners</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercase pt-2'>Legal</h6>
          <ul>
            <li className='py-1'>Claims</li>
            <li className='py-1'>Privacy</li>
            <li className='py-1'>Terms</li>
            <li className='py-1'>Policies</li>
            <li className='py-1'>Conditions</li>
          </ul>
        </div>
        <div className='col-span-2 pt-8 md:pt-2'>
          <p className='font-bold uppercase'>Subscribe to our newsletter</p>
          <p className='py-4'>The latest news, articles, and resources, sent to your inbox weekly.</p>
          <form className='flex flex-col sm:flex-row'>
            <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Enter email..' />
            <button className='p-2 mb-4 hover:text-[#ffffff]'>Subscribe</button>
          </form>
        </div>
      </div>

      <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-slate-300'>
        <p className='py-4 text-white'>Copyright © 2022 <span className='text-orange-600'>Moringa</span><span className='text-blue-600'>NFT</span></p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
          <FaFacebook className=' cursor-pointer hover:text-orange-600' />
          <FaInstagram className=' cursor-pointer hover:text-orange-600' />
          <FaTwitter className=' cursor-pointer hover:text-orange-600' />
          <FaTwitch className=' cursor-pointer hover:text-orange-600' />
          <FaGithub className=' cursor-pointer hover:text-orange-600' />
        </div>
      </div>
    </div>
  )
}

export default Footer