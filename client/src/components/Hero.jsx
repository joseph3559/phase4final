import React from 'react'
import headerImage from '../assets/images/headerImage.png'


const Hero = () => {
  return (
    <div class="home" className='w-full h-screen flex flex-col justify-between'>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
          <h1 className='py-3 text-4xl md:text-5xl font-semibold'>Discover, collect, and sell extraordinary <span className=' stroke-1 stroke-[#ff6600] fill-transparent'>NFTs</span></h1>
          <p className='text-2xl mt-5'>MoringaNFT is the world's first and largest NFT marketplace </p>

          <div className='flex gap-2 mt-10'>
            <button className='pt-4 pb-5 min-w-[130px] font-bold border-2 rounded-3xl'>Explore</button>

            <button className='pt-4 pb-5 min-w-[130px] bg-slate-300 text-blue-900 hover:text-[#ffffff] font-bold border-2 rounded-3xl'>Create</button>
          </div>
        </div>
        <div className='mx-10 mt-16 mb-2'>
          <img className=' w-full h-full object-cover' src={headerImage} alt='headerImage' />
        </div>
      </div>

    </div>
  )

}

export default Hero

