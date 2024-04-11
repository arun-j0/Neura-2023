import React from 'react'
import { Link } from 'react-router-dom';
import {logo, relayCoding} from '../import';
import {IndividualTitle} from '../../Components'
// import {Footer} from '../../Containers'

const RallyCoding = () => {
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
          <IndividualTitle text='RELAY CODING' />
          <div className='sm:flex'>
            <img src={relayCoding} alt="" className='svg-hidden sm:w-96 sm:h-96'/>
            <div className='flex flex-col mx-2 text-left gap-2 '>
              <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>REGISTRATION FEE</span> : INR 100 </div>
              <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>PRIZE AMOUNT</span> : INR 1600 </div>
              <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>DATE AND TIME</span> : 13 MARCH - 12:30PM </div>
              <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>VENUE</span> : IOT LAB - IT, PTU </div>

              <div>
                <ul className='flex flex-col gap-2 text-b ase sm:text-lg my-3'>
                  <li className='font-semibold underline'>ALL PARTCIPANTS ARE REQUESTED TO BRING THEIR LAPTOP</li> 
                  <li>1. EACH TEAM SHOULD HAVE 2 MEMBERS. </li>
                  <li>2. ONE INTERMIDIATE LEVEL QUESTION WILL BE GIVEN. </li>
                  <li>3. AFTER DISCUSSING FOR 5 MINUTES FIRST ONE FROM THE TEAM WILL START SOLVING THE PROBLEM. </li>
                  <li>4. AFTER 10 MINUTES SECOND PERSON HAVE TO CONTINUE SOLVING THE SAME PROBLEM. </li>
                  <li className='font-light'>( SWAPPING OF TEAM MATE WILL BE DONE ONLY AFTER 10 MIN AND EACH TEAM MATE NEED TO WORK FOR 10 MINUTES BEFORE SWAPPING )</li>
                  <li>5. FIRST TEAM TO COME UP WITH A SOLUTION WINS. </li>
                  <li>6. IF TWO TEAM COMPLETES AT THE SAME TIME THEN TIME COMPLEXITY WILL BE CONSIDERED. </li>
                </ul>
              </div>
              <div className='bg-backGround rounded-xl py-2 px-5 space-y-3'>
              <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>REGISTRATION</span> : <a href='https://forms.gle/BTWteXQT3Bzx58KS8' target='_blank' className='hover:text-orange'><span className='underline text-red hover:text-green'>LINK</span></a> ( SPOT REGISTRATION ALSO AVAILABLE )</div>
                <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>FOR FURTHER DETAILS CONTACT</span> : VIKRAM - 9443615349</div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default RallyCoding