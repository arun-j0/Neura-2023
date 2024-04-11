import React from 'react'
import {wave, logo} from './import'

const Footer = () => {
  return (
    <div className='mt-20 '>
      <div className='flex flex-col items-center justify-center gap-2 '>
        <div className='flex flex-col items-center'>
          <img src={logo} className='w-24 h-24 md:w-48 md:h-48'  />
          <p className='text-2xl md:text-3xl font-cinel text-gold'>&nbsp;NEURA&nbsp;2023</p>
        </div>
        
        <div className='text-xs sm:text-base font-normal text-white '>
          Copyright &#169; 2023
        </div>
        <div className='text-xs md:text-base font-thin text-white-custom'>
        Built by <a href="https://www.linkedin.com/in/vikram-palani" target='_blank'>
                      <span className='z-10 hover:text-gold'>&lt;Vikram/&gt;</span>
                      <span className='animate-pulse z-10'>🖤</span>
                    </a> 
        </div>
      </div>
      <img src={wave} className='w-screen footer-svg' />

     </div>
  )
}

export default Footer