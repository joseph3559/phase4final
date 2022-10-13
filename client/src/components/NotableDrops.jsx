import React from 'react'
import item1 from '../assets/images/item1.jpg'
import item2 from '../assets/images/item2.jpg'
import item3 from '../assets/images/item3.jpg'

const NotableDrops = () => {
  return (
    <div name='pricing' className='w-full text-white my-24'>
      <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>

      <div className='max-w-[1240px] mx-auto py-12'>

        <div className='text-center py-6 text-slate-300'>
          <h2 className='text-4xl text-white font-bold uppercase'>Notable Drops</h2>

        </div>

        <div className='grid md:grid-cols-3'>

          <div className='bg-none text-slate-900 m-4 border-orange-600 hover:border-[#000066] border-4 rounded-3xl shadow-2xl relative'>
            <img className='w-full h-full rounded-3xl p-1 bg-cover' src={item1} alt="item1" />
            
          </div>
          <div className='bg-none text-slate-900 m-4 border-orange-600 hover:border-[#000066] border-4 rounded-3xl shadow-2xl relative'>
            <img className='w-full h-full rounded-3xl p-1' src={item2} alt="item2" />


          </div>
          <div className='bg-none text-slate-900 m-4 border-orange-600 hover:border-[#000066] border-4 rounded-3xl shadow-2xl relative'>
            <img className='w-full h-full rounded-3xl p-1' src={item3} alt="item3" />


          </div>

        </div>
      </div>
    </div>

  )
}

export default NotableDrops