import React from 'react'
import { Link } from 'react-router-dom';
import {logo, blindCoding} from '../import';
import {IndividualTitle} from '../../Components'

const BlindCoding = () => {
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
          <IndividualTitle text='BLIND CODING' />
          <div className='sm:flex'>
            <img src={blindCoding} alt="" className='svg-hidden sm:w-96 sm:h-96'/>
            <div className='flex flex-col mx-2 text-left gap-2 '>
              <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>REGISTRATION FEE</span> : INR 50 </div>
              <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>PRIZE AMOUNT</span> : INR 1600 </div>
              <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>DATE AND TIME</span> : 14 MARCH - 9:30AM </div>
              <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>VENUE</span> : SW LAB 2 - IT, PTU </div>

              <div>
                <ul className='flex flex-col gap-2 text-b ase sm:text-lg my-3'> 
                  <li className='font-semibold underline'>ALL PARTCIPANTS ARE REQUESTED TO BRING THEIR LAPTOP</li>
                  <li><span className='font-medium'>1. ROUND 1 :</span> PARTICIPANTS ARE NOT ALLOWED TO COMPILE THE CODE TILL THEY FINISH. </li>
                  <li>2. ROUND 1 JUDGING WILL BE BASED ON THE NUMBER OF ERRORS AFTER COMPILATION (IF ANY). </li>
                  <li><span className='font-medium'>3. ROUND 2 :</span> PARTICIPANTS ARE RESTRICTED FROM USING MONITOR WHILE CODING. </li>
                  <li>4. JUDGING IN ROUND 2 WILL BE BASED ON THE NUMBER OF ERRORS AFTER COMPILATION (IF ANY). </li>
                  <li>6. IF TWO PARTICIPANTS COMPLETES AT THE SAME TIME THEN TIME COMPLEXITY WILL BE CONSIDERED. </li>
                </ul>
              </div>
              <div className='bg-backGround rounded-xl py-2 px-5 space-y-3'>
                <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>REGISTRATION</span> : <a href='https://forms.gle/yaFhLxGNd6F1b5K89' target='_blank' className='hover:text-orange'><span className='underline text-red hover:text-green'>LINK</span></a> ( SPOT REGISTRATION ALSO AVAILABLE )</div>
                <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>FOR FURTHER DETAILS CONTACT</span> : VIKRAM - 9443615349</div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default BlindCoding