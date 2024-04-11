import React from 'react'
import { Link } from 'react-router-dom';
import {logo, bringThingsToLife} from '../import';
import {IndividualTitle} from '../../Components'

const BringThingsToLife = () => {
  return (
    <div className='bg-white'>
        <div className='bg-black w-full z-10 backdrop-filter backdrop-blur-lg bg-opacity-[40%] '>
          <div className='max-w-7xl mx-auto flex px-6 py-3 items-center justify-between'>
            <div className='flex gap-5 items-center'>
                <img src={logo} className='w-9 h-10'/> 
                <p className='text-lg md:text-2xl text-white font-cinel'>NEURA 2K23</p>
            </div>
            <div className='flex gap-5 text-sm sm:text-xl'>
              <Link to='/'><button className='rounded-lg px-2 py-1 hover:bg-orange'>BACK</button></Link>
            </div>
          </div>
        </div>

        <div className='flex max-w-6xl h-auto flex-col items-center justify-start mt-8 gap-10 mx-2 sm:mx-auto'>
          <IndividualTitle text='BRING THINS TO LIFE' />
          <div className='sm:flex'>
            <img src={bringThingsToLife} alt="" className='svg-hidden sm:w-96 sm:h-96'/>
            <div className='flex flex-col mx-2 text-left gap-2 '>
              <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>REGISTRATION FEE</span> : INR 50 </div>
              <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>PRIZE AMOUNT</span> : INR 1500 </div>
              <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>DATE AND TIME</span> : 13 MARCH - 2:30PM </div>
              <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>VENUE</span> : ROOM 1 - IT, PTU </div>
              <div>
                <ul className='flex flex-col gap-2 text-b ase sm:text-lg my-3'> 
                <li>1. THE PARTICIPANT WOULD BE GIVEN A RANDOM THING ON THE SPOT. </li>
                <li>2. THE PARTICIPANT HAS TO GET INTO THE SHOES OF THAT INANIMATE THING AND SAY WHAT THE THING WOULD HAVE SAID IF IT COULD SPEAK. </li>
                <li>3. IT IS UPTO THE PARTICIPANT'S CREATIVITY, HOW THEY DESCRIBE THEIR THOUGHTS AND EXPERIENCES. </li>
                <li>4. PREPARATION TIME: 2 MINUTE. </li>
                <li>5. DURATION: 3 MINUTES. </li>
                <li>6. DECISION MADE BY THE CO-ORDINATORS WILL BE FINAL IN ALL ASPECTS. </li>

                </ul>
              </div>
              <div className='bg-backGround rounded-xl py-2 px-5 space-y-3'>
              <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>REGISTRATION</span> : <a href='https://forms.gle/PTvFoNwB1uCvar3q6' target='_blank' className='hover:text-orange'><span className='text-red hover:text-green underline'>LINK</span></a> ( SPOT REGISTRATION ALSO AVAILABLE )</div>

                <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>FOR FURTHER DETAILS CONTACT</span> : SREE VYSHNAVI C - 9843508506</div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default BringThingsToLife