import React from 'react'
import {logo} from './import'
import {WordLeft, WordRight} from '../Components'
import {motion} from 'framer-motion'

const Header = () => {
  return (
    <div>
      <div className='h-screen max-w-6xl flex items-center justify-between mx-auto'>
          <div className='flex flex-col items-center mx-auto justify-center md:flex-row gap-2'>
              <img className='img-header w-24 h-24 md:w-1/2 md:h-full' src={logo} draggable='false' />
              <div className='flex flex-col justify-between px-6'>
                  <p className='text-4xl md:text-6xl text-center font-cinel text-yellow' >
                    <span className='hover:text-white'>N</span>
                    <span className='hover:text-white'>E</span>
                    <span className='hover:text-white'>U</span>
                    <span className='hover:text-white'>R</span>
                    <span className='hover:text-white'>A</span>
                    <span>&nbsp;</span>
                    <span className='hover:text-white'>2</span>
                    <span className='hover:text-white'>0</span>
                    <span className='hover:text-white'>2</span>
                    <span className='hover:text-white'>3</span>
                  </p>
                  <WordRight text='Tech A-rest'/>
                  <WordLeft text='March 13 & 14'/>
              </div>
          </div>
      </div>

      <div className='absolute bottom-10 w-full flex justify-center items-center'>
        <a href="#aboutus">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-yellow flex justify-center items-start p-2'>
            <motion.dev
              animate={{
                y:[0, 24, 0]
              }} 
              transition={{
                duration: 1.5,
                repeat : Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-yellow mb-1'
            />
          </div>
        </a>
      </div>

    </div>

  )
}

export default Header