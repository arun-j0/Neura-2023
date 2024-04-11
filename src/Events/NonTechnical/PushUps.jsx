import React from 'react'
import { Link } from 'react-router-dom';
import {logo, pushUps} from '../import';
import {IndividualTitle} from '../../Components'

const PushUps = () => {
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
          <IndividualTitle text='PUSH UPS' />
          <div className='sm:flex'>
            <img src={pushUps} alt="" className='svg-hidden sm:w-96 sm:h-96'/>
            <div className='flex flex-col mx-2 text-left gap-2 '>
              <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>REGISTRATION FEE</span> : INR 50 </div>
              <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>PRIZE AMOUNT</span> : INR 2000 </div>
              <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>DATE AND TIME</span> : 13 MARCH - 3PM </div>
              <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>VENUE</span> : AUDITORIUM INDOOR - IT, PTU </div>
              <div>
                <ul className='flex flex-col gap-2 text-b ase sm:text-lg my-3'> 
                  <li>1. 2 ROUNDS WIILL BE CONDUCTED. </li>
                  <li>2. EVENTS WILL BE IN HEATS. </li>
                  <li>3. PERSON WITH MAXIMUM COUNT IN EACH HEATS WILL BE SELECTED FOR FINAL ROUND.  </li>
                  <li>4. BREAK WILL BE THERE. </li>
                  <li>5. FINAL ROUND WILL BE CONDUCTED FOR THE SELECTED PERSONS. </li>
                  <li>6. WINNERS WILL BE CHOSEN FROM THE FINAL ROUND ONLY. </li>
                </ul>
              </div>
              <div className='bg-backGround rounded-xl py-2 px-5 space-y-3'>
                <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>REGISTRATION</span> : <a href='https://forms.gle/TAEtTkbDV7VpREow7' target='_blank' className='hover:text-orange'><span className='text-red hover:text-green underline'>LINK</span></a> ( SPOT REGISTRATION ALSO AVAILABLE )</div>
                <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>FOR FURTHER DETAILS CONTACT</span> : KAUSHIK JB - 8220388306</div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default PushUps