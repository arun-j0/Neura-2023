import React from 'react'
import { Link } from 'react-router-dom';
import {logo, funzone} from '../import';
import {IndividualTitle} from '../../Components'

const FunZone = () => {
  return (
    <div className='bg-white'>
        <div className='bg-black w-full z-10 backdrop-filter backdrop-blur-lg bg-opacity-[40%] '>
          <div className='max-w-7xl mx-auto flex px-6 py-3 items-center justify-between'>
            <div className='flex gap-5 items-center'>
                <img src={logo} className='w-9 h-10'/> 
                <p className='text-lg md:text-2xl text-white font-cinel'>NEURA 2023</p>
            </div>
            <div className='flex gap-5 text-sm sm:text-xl'>
              <Link to='/'><button className='rounded-lg px-2 py-1 hover:bg-orange'>BACK</button></Link>
            </div>
          </div>
        </div>

        <div className='flex max-w-6xl h-auto flex-col items-center justify-start mt-8 gap-10 mx-2 sm:mx-auto'>
          <IndividualTitle text='FUN ZONE' />
          <div className='sm:flex'>
            <img src={funzone} alt="" className='svg-hidden sm:w-96 sm:h-96'/>
            <div className='flex flex-col mx-2 text-left gap-2 '>
              <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>DATE AND TIME</span> : 13 MARCH - 3PM </div>
              <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>VENUE</span> : AUDITORIUM MUTIPURPOSE AREA, PTU </div>
              <div>
                <ul className='flex flex-col gap-2 text-b ase sm:text-lg my-3'> 
                  <li className='font-medium'> FUN ZONE OF NEURA INCLUDES VARIOUS EVENTS.  </li>
                  <li className='font-light'>( REGISTRATION FEE AND PRIZE AMOUNT DIFFERS FOR EVERY EVENT )</li>
                  <li>1. HAND CRICKET / ODD OR EVEN - BEST OF THREE </li>
                  <li>2. HIT THE GLASS.  </li>
                  <li>3. PEN FIGHT </li>
                  <li>4. WATER WAR </li>
                  <li>5. PUT THE BALL IN THE BOWL</li>
                </ul>
              </div>
              <div className='bg-backGround rounded-xl py-2 px-5 space-y-3'>
                <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>REGISTRATION </span>: ONLY SPOT REGISTRATION AVAILABLE</div>
                <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>FOR FURTHER DETAILS CONTACT</span> : MADHANKUMAR V - 7708138102</div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default FunZone
