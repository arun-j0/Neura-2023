import React from 'react'
import { Link } from 'react-router-dom';
import {logo, webDesign} from '../import';
import {IndividualTitle} from '../../Components'

const WebDesign = () => {
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
          <IndividualTitle text='WEB DESIGNING' />
          <div className='sm:flex'>
            <img src={webDesign} alt="" className='svg-hidden sm:w-96 sm:h-96'/>
            <div className='flex flex-col mx-2 text-left gap-2 '>
              <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>REGISTRATION FEE</span> : INR 100 </div>
              <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>PRIZE AMOUNT</span> : INR 3200 </div>
              <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>DATE AND TIME</span> : 13 MARCH - 2:30PM </div>
              <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>VENUE</span> : SW LAB 2 - IT, PTU </div>

              <div>
                <ul className='flex flex-col gap-2 text-b ase sm:text-lg my-3'> 
                  <li className='font-semibold underline'>ALL PARTCIPANTS ARE REQUESTED TO BRING THEIR LAPTOP</li>
                  <li>1. IT IS A INDIVIDUAL COMPETITION. </li>
                  <li><span className='font-medium'>TASK - 1</span> - PARTICIPANTS HAVE TO CLONE THE GIVEN DESIGNS. </li>
                  <li><span className='font-medium'>TASK - 2</span> - PARTICIPANTS HAVE TO DESIGN AN APP WITH THE GIVEN ASSETS </li>
                  <li>4. WINNERS WILL BE SELECTED BASED ON THE RESULTS OF THE TWO TASKS. </li>
                  <li>5. DECISION MADE BY THE CO-ORDINATORS WILL BE FINAL IN ALL ASCEPTS.  </li>
                </ul>
              </div>
              <div className='bg-backGround rounded-xl py-2 px-5 space-y-3'>
              <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>REGISTRATION</span> : <a href='https://forms.gle/DxkSk6gzTS98wha99' target='_blank' className='hover:text-orange '><span className=' underline text-red hover:text-green'>LINK</span></a> ( SPOT REGISTRATION ALSO AVAILABLE )</div>

                <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>FOR FURTHER DETAILS CONTACT</span> : VIKRAM - 9443615349</div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default WebDesign