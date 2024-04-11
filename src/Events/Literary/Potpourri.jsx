import React from 'react'
import { Link } from 'react-router-dom';
import {logo, potPuri} from '../import';
import {IndividualTitle} from '../../Components'

const Potpourri = () => {
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
          <IndividualTitle text='POT POURRI' />
          <div className='sm:flex'>
            <img src={potPuri} alt="" className='svg-hidden sm:w-96 sm:h-96'/>
            <div className='flex flex-col mx-2 text-left gap-2 '>
              <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>REGISTRATION FEE</span> : INR 100 </div>
              <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>PRIZE AMOUNT</span> : INR 3500 </div>
              <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>DATE AND TIME</span> : 14 MARCH - 11:30AM </div>
              <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>VENUE</span> : ROOM 1, PTU </div>

              <div>
                <ul className='flex flex-col gap-2 text-b ase sm:text-lg my-3'> 
                <li>1. EACH TEAM CAN HAVE 2 OR 3 PARTICIPANTS. </li>
                <li><span className='font-medium'>ROUND 1: CATCH PHRASE </span>- ONE PERSON WILL BE SHOWN A LIST OF ENGLISH WORDS. THE CLUE-GIVER HAS TO CONVEY THE WORDS TO THE TEAM MATES USING PHYSICAL GESTURES OR SAYING ANY RELATED WORDS WITHOUT SAYING THE ACTUAL WORD IN ANY FORM. </li>
                <li><span className='font-medium'>ROUND 2: PICTIONARY </span>- ONE PERSON WILL BE SHOWN A LIST OF ENGLISH WORDS. THAT PERSON HAS TO CONVEY THE WORDS TO THE TEAM MATES BY JUST DRAWING PICTURES.</li>
                <li><span className='font-medium'>ROUND 3: WHAT'S NEXT? </span>- THE STORY SHOULD BE STARTED BY ONE PERSON BASED ON THE GIVEN WORDS AND THEN CONTINUED BY OTHERS. THE JUDGING WILL BE BASED ON THE COMPLETENESS OF THE STORY AND HOW THE TEAM MEMBERS' STORY SYNCS.</li>
                </ul>
              </div>
              <div className='bg-backGround rounded-xl py-2 px-5 space-y-3'>
              <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>REGISTRATION</span> : <a href='https://forms.gle/nhFCtYiz537KfTus6' target='_blank' className='hover:text-orange'><span className='text-red hover:text-green underline'>LINK</span></a> ( SPOT REGISTRATION ALSO AVAILABLE )</div>
                <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>FOR FURTHER DETAILS CONTACT</span> : SREE VYSHNAVI - 9843508506</div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Potpourri