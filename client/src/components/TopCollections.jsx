import React from 'react'
import { FaEthereum } from 'react-icons/fa'
import seller1 from '../assets/images/seller1.jpg'
import seller2 from '../assets/images/seller2.jpg'
import seller3 from '../assets/images/seller3.png'
import seller4 from '../assets/images/seller4.png'
import seller5 from '../assets/images/seller5.png'
import seller6 from '../assets/images/seller6.png'
import seller7 from '../assets/images/seller7.png'
import seller8 from '../assets/images/seller8.png'


const TopCollections = () => {
  return (
    <div className='w-full flex flex-col text-center'>
      <div className='w-full h-[800px]'>
        <div>
          <h1 className=' text-3xl font-bold text-white'>Top Sellers <span className='text-blue-600'>overlast 24 hours</span></h1>
        </div>
        <div className='grid md:grid-cols-3 gap-4 m-10'>
          <div className='border py-8 rounded-xl shadow-xl bg-slate-300 w-full text-left flex flex-row justify-between mr-2 p-4 h-[88px] box-border items-center'>
            <div>1</div>
            <div className=' rounded-full object-cover items-center overflow-hidden relative flex box-border'>
              <img className='h-16 w-16' src={seller1} alt="" />
            </div>
            <div className='flex flex-col'>
              <span>
                <h2 className='text-white font-bold'>Scott Joe</h2>
              </span>
              <h2 className='text-slate-700 font-semin-bold'>Floor price:</h2>
            </div>
            <div>
              <span>
                <h1 className='font-bold text-green-500'>+453%</h1>
              </span>
              <div className='flex flex-row '>
                <span>
                  <FaEthereum className=' text-xl' />
                </span>
                <h1 className=' text-slate-700'>5950</h1>
              </div>
            </div>
          </div>
          <div className='border py-8 rounded-xl shadow-xl bg-slate-300 w-full text-left flex flex-row justify-between mr-2 p-4 h-[88px] box-border items-center'>
            <div>2</div>
            <div className=' rounded-full object-cover items-center overflow-hidden relative flex box-border'>
              <img className='h-16 w-16' src={seller2} alt="" />
            </div>
            <div className='flex flex-col'>
              <span>
                <h2 className='text-white font-bold'>Bricktopian Dee</h2>
              </span>
              <h2 className='text-slate-700 font-semin-bold'>Floor price:</h2>
            </div>
            <div>
              <span>
                <h1 className='font-bold text-green-500'>+453%</h1>
              </span>
              <div className='flex flex-row '>
                <span>
                  <FaEthereum className=' text-xl' />
                </span>
                <h1 className=' text-slate-700'>5900</h1>
              </div>
            </div>
          </div>
          <div className='border py-8 rounded-xl shadow-xl bg-slate-300 w-full text-left flex flex-row justify-between mr-2 p-4 h-[88px] box-border items-center'>
            <div>3</div>
            <div className=' rounded-full object-cover items-center overflow-hidden relative flex box-border'>
              <img className='h-16 w-16' src={seller3} alt="" />
            </div>
            <div className='flex flex-col'>
              <span>
                <h2 className='text-white font-bold'>Maina J</h2>
              </span>
              <h2 className='text-slate-700 font-semin-bold'>Floor price:</h2>
            </div>
            <div>
              <span>
                <h1 className='font-bold text-green-500'>+453%</h1>
              </span>
              <div className='flex flex-row '>
                <span>
                  <FaEthereum className=' text-xl' />
                </span>
                <h1 className=' text-slate-700'>5900</h1>
              </div>
            </div>
          </div>
          <div className='border py-8 rounded-xl shadow-xl bg-slate-300 w-full text-left flex flex-row justify-between mr-2 p-4 h-[88px] box-border items-center'>
            <div>4</div>
            <div className=' rounded-full object-cover items-center overflow-hidden relative flex box-border'>
              <img className='h-16 w-16' src={seller4} alt="" />
            </div>
            <div className='flex flex-col'>
              <span>
                <h2 className='text-white font-bold'>Peter K</h2>
              </span>
              <h2 className='text-slate-700 font-semin-bold'>Floor price:</h2>
            </div>
            <div>
              <span>
                <h1 className='font-bold text-green-500'>+453%</h1>
              </span>
              <div className='flex flex-row '>
                <span>
                  <FaEthereum className=' text-xl' />
                </span>
                <h1 className=' text-slate-700'>5900</h1>
              </div>
            </div>
          </div>
          <div className='border py-8 rounded-xl shadow-xl bg-slate-300 w-full text-left flex flex-row justify-between mr-2 p-4 h-[88px] box-border items-center'>
            <div>5</div>
            <div className=' rounded-full object-cover items-center overflow-hidden relative flex box-border'>
              <img className='h-16 w-16' src={seller5} alt="" />
            </div>
            <div className='flex flex-col'>
              <span>
                <h2 className='text-white font-bold'>Marry Ann</h2>
              </span>
              <h2 className='text-slate-700 font-semin-bold'>Floor price:</h2>
            </div>
            <div>
              <span>
                <h1 className='font-bold text-green-500'>+453%</h1>
              </span>
              <div className='flex flex-row '>
                <span>
                  <FaEthereum className=' text-xl' />
                </span>
                <h1 className=' text-slate-700'>5900</h1>
              </div>
            </div>
          </div>
          <div className='border py-8 rounded-xl shadow-xl bg-slate-300 w-full text-left flex flex-row justify-between mr-2 p-4 h-[88px] box-border items-center'>
            <div>6</div>
            <div className=' rounded-full object-cover items-center overflow-hidden relative flex box-border'>
              <img className='h-16 w-16' src={seller6} alt="" />
            </div>
            <div className='flex flex-col'>
              <span>
                <h2 className='text-white font-bold'>Brian J</h2>
              </span>
              <h2 className='text-slate-700 font-semin-bold'>Floor price:</h2>
            </div>
            <div>
              <span>
                <h1 className='font-bold text-green-500'>+453%</h1>
              </span>
              <div className='flex flex-row '>
                <span>
                  <FaEthereum className=' text-xl' />
                </span>
                <h1 className=' text-slate-700'>5900</h1>
              </div>
            </div>
          </div>
          <div className='border py-8 rounded-xl shadow-xl bg-slate-300 w-full text-left flex flex-row justify-between mr-2 p-4 h-[88px] box-border items-center'>
            <div>7</div>
            <div className=' rounded-full object-cover items-center overflow-hidden relative flex box-border'>
              <img className='h-16 w-16' src={seller7} alt="" />
            </div>
            <div className='flex flex-col'>
              <span>
                <h2 className='text-white font-bold'>Bricktstone G</h2>
              </span>
              <h2 className='text-slate-700 font-semin-bold'>Floor price:</h2>
            </div>
            <div>
              <span>
                <h1 className='font-bold text-green-500'>+453%</h1>
              </span>
              <div className='flex flex-row '>
                <span>
                  <FaEthereum className=' text-xl' />
                </span>
                <h1 className=' text-slate-700'>5900</h1>
              </div>
            </div>
          </div>
          <div className='border py-8 rounded-xl shadow-xl bg-slate-300 w-full text-left flex flex-row justify-between mr-2 p-4 h-[88px] box-border items-center'>
            <div>8</div>
            <div className=' rounded-full object-cover items-center overflow-hidden relative flex box-border'>
              <img className='h-16 w-16' src={seller8} alt="" />
            </div>
            <div className='flex flex-col'>
              <span>
                <h2 className='text-white font-bold'>Jannes Andrew</h2>
              </span>
              <h2 className='text-slate-700 font-semin-bold'>Floor price:</h2>
            </div>
            <div>
              <span>
                <h1 className='font-bold text-green-500'>+453%</h1>
              </span>
              <div className='flex flex-row '>
                <span>
                  <FaEthereum className=' text-xl' />
                </span>
                <h1 className=' text-slate-700'>5900</h1>
              </div>
            </div>
          </div>
          <div className='border py-8 rounded-xl shadow-xl bg-slate-300 w-full text-left flex flex-row justify-between mr-2 p-4 h-[88px] box-border items-center'>
            <div>1</div>
            <div className=' rounded-full object-cover items-center overflow-hidden relative flex box-border'>
              <img className='h-16 w-16' src={seller1} alt="" />
            </div>
            <div className='flex flex-col'>
              <span>
                <h2 className='text-white font-bold'>Bricktopian</h2>
              </span>
              <h2 className='text-slate-700 font-semin-bold'>Floor price:</h2>
            </div>
            <div>
              <span>
                <h1 className='font-bold text-green-500'>+453%</h1>
              </span>
              <div className='flex flex-row '>
                <span>
                  <FaEthereum className=' text-xl' />
                </span>
                <h1 className=' text-slate-700'>5900</h1>
              </div>
            </div>
          </div>
          <div className='border py-8 rounded-xl shadow-xl bg-slate-300 w-full text-left flex flex-row justify-between mr-2 p-4 h-[88px] box-border items-center'>
            <div>1</div>
            <div className=' rounded-full object-cover items-center overflow-hidden relative flex box-border'>
              <img className='h-16 w-16' src={seller1} alt="" />
            </div>
            <div className='flex flex-col'>
              <span>
                <h2 className='text-white font-bold'>Bricktopian</h2>
              </span>
              <h2 className='text-slate-700 font-semin-bold'>Floor price:</h2>
            </div>
            <div>
              <span>
                <h1 className='font-bold text-green-500'>+453%</h1>
              </span>
              <div className='flex flex-row '>
                <span>
                  <FaEthereum className=' text-xl' />
                </span>
                <h1 className=' text-slate-700'>5900</h1>
              </div>
            </div>
          </div>
          <div className='border py-8 rounded-xl shadow-xl bg-slate-300 w-full text-left flex flex-row justify-between mr-2 p-4 h-[88px] box-border items-center'>
            <div>1</div>
            <div className=' rounded-full object-cover items-center overflow-hidden relative flex box-border'>
              <img className='h-16 w-16' src={seller1} alt="" />
            </div>
            <div className='flex flex-col'>
              <span>
                <h2 className='text-white font-bold'>Bricktopian</h2>
              </span>
              <h2 className='text-slate-700 font-semin-bold'>Floor price:</h2>
            </div>
            <div>
              <span>
                <h1 className='font-bold text-green-500'>+453%</h1>
              </span>
              <div className='flex flex-row '>
                <span>
                  <FaEthereum className=' text-xl' />
                </span>
                <h1 className=' text-slate-700'>5900</h1>
              </div>
            </div>
          </div>
          <div className='border py-8 rounded-xl shadow-xl bg-slate-300 w-full text-left flex flex-row justify-between mr-2 p-4 h-[88px] box-border items-center'>
            <div>1</div>
            <div className=' rounded-full object-cover items-center overflow-hidden relative flex box-border'>
              <img className='h-16 w-16' src={seller1} alt="" />
            </div>
            <div className='flex flex-col'>
              <span>
                <h2 className='text-white font-bold'>Bricktopian</h2>
              </span>
              <h2 className='text-slate-700 font-semin-bold'>Floor price:</h2>
            </div>
            <div>
              <span>
                <h1 className='font-bold text-green-500'>+453%</h1>
              </span>
              <div className='flex flex-row '>
                <span>
                  <FaEthereum className=' text-xl' />
                </span>
                <h1 className=' text-slate-700'>5900</h1>
              </div>
            </div>
          </div>
          <div className='border py-8 rounded-xl shadow-xl bg-slate-300 w-full text-left flex flex-row justify-between mr-2 p-4 h-[88px] box-border items-center'>
            <div>1</div>
            <div className=' rounded-full object-cover items-center overflow-hidden relative flex box-border'>
              <img className='h-16 w-16' src={seller1} alt="" />
            </div>
            <div className='flex flex-col'>
              <span>
                <h2 className='text-white font-bold'>Bricktopian</h2>
              </span>
              <h2 className='text-slate-700 font-semin-bold'>Floor price:</h2>
            </div>
            <div>
              <span>
                <h1 className='font-bold text-green-500'>+453%</h1>
              </span>
              <div className='flex flex-row '>
                <span>
                  <FaEthereum className=' text-xl' />
                </span>
                <h1 className=' text-slate-700'>5900</h1>
              </div>
            </div>
          </div>
          <div className='border py-8 rounded-xl shadow-xl bg-slate-300 w-full text-left flex flex-row justify-between mr-2 p-4 h-[88px] box-border items-center'>
            <div>1</div>
            <div className=' rounded-full object-cover items-center overflow-hidden relative flex box-border'>
              <img className='h-16 w-16' src={seller1} alt="" />
            </div>
            <div className='flex flex-col'>
              <span>
                <h2 className='text-white font-bold'>Bricktopian</h2>
              </span>
              <h2 className='text-slate-700 font-semin-bold'>Floor price:</h2>
            </div>
            <div>
              <span>
                <h1 className='font-bold text-green-500'>+453%</h1>
              </span>
              <div className='flex flex-row '>
                <span>
                  <FaEthereum className=' text-xl' />
                </span>
                <h1 className=' text-slate-700'>5900</h1>
              </div>
            </div>
          </div>     <div className='border py-8 rounded-xl shadow-xl bg-slate-300 w-full text-left flex flex-row justify-between mr-2 p-4 h-[88px] box-border items-center'>
            <div>1</div>
            <div className=' rounded-full object-cover items-center overflow-hidden relative flex box-border'>
              <img className='h-16 w-16' src={seller1} alt="" />
            </div>
            <div className='flex flex-col'>
              <span>
                <h2 className='text-white font-bold'>Bricktopian</h2>
              </span>
              <h2 className='text-slate-700 font-semin-bold'>Floor price:</h2>
            </div>
            <div>
              <span>
                <h1 className='font-bold text-green-500'>+453%</h1>
              </span>
              <div className='flex flex-row '>
                <span>
                  <FaEthereum className=' text-xl' />
                </span>
                <h1 className=' text-slate-700'>5900</h1>
              </div>
            </div>
          </div>
          <div className='border py-8 rounded-xl shadow-xl bg-slate-300 w-full text-left flex flex-row justify-between mr-2 p-4 h-[88px] box-border items-center'>
            <div>1</div>
            <div className=' rounded-full object-cover items-center overflow-hidden relative flex box-border'>
              <img className='h-16 w-16' src={seller1} alt="" />
            </div>
            <div className='flex flex-col'>
              <span>
                <h2 className='text-white font-bold'>Bricktopian</h2>
              </span>
              <h2 className='text-slate-700 font-semin-bold'>Floor price:</h2>
            </div>
            <div>
              <span>
                <h1 className='font-bold text-green-500'>+453%</h1>
              </span>
              <div className='flex flex-row '>
                <span>
                  <FaEthereum className=' text-xl' />
                </span>
                <h1 className=' text-slate-700'>5900</h1>
              </div>
            </div>
          </div>
          <div className='border py-8 rounded-xl shadow-xl bg-slate-300 w-full text-left flex flex-row justify-between mr-2 p-4 h-[88px] box-border items-center'>
            <div>1</div>
            <div className=' rounded-full object-cover items-center overflow-hidden relative flex box-border'>
              <img className='h-16 w-16' src={seller1} alt="" />
            </div>
            <div className='flex flex-col'>
              <span>
                <h2 className='text-white font-bold'>Bricktopian</h2>
              </span>
              <h2 className='text-slate-700 font-semin-bold'>Floor price:</h2>
            </div>
            <div>
              <span>
                <h1 className='font-bold text-green-500'>+453%</h1>
              </span>
              <div className='flex flex-row '>
                <span>
                  <FaEthereum className=' text-xl' />
                </span>
                <h1 className=' text-slate-700'>5900</h1>
              </div>
            </div>
          </div>
          <div className='border py-8 rounded-xl shadow-xl bg-slate-300 w-full text-left flex flex-row justify-between mr-2 p-4 h-[88px] box-border items-center'>
            <div>1</div>
            <div className=' rounded-full object-cover items-center overflow-hidden relative flex box-border'>
              <img className='h-16 w-16' src={seller1} alt="" />
            </div>
            <div className='flex flex-col'>
              <span>
                <h2 className='text-white font-bold'>Bricktopian</h2>
              </span>
              <h2 className='text-slate-700 font-semin-bold'>Floor price:</h2>
            </div>
            <div>
              <span>
                <h1 className='font-bold text-green-500'>+453%</h1>
              </span>
              <div className='flex flex-row '>
                <span>
                  <FaEthereum className=' text-xl' />
                </span>
                <h1 className=' text-slate-700'>5900</h1>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default TopCollections