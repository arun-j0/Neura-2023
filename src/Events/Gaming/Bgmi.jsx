import React from 'react'
import { Link } from 'react-router-dom';
import {logo, BGMI} from '../import';
import {IndividualTitle} from '../../Components'

const Bgmi = () => {
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
          <IndividualTitle text='BGMI' />
          <div className='sm:flex'>
            <img src={BGMI} alt="" className='svg-hidden sm:w-96 sm:h-96'/>
            <div className='flex flex-col mx-2 text-left gap-2 '>
              <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>REGISTRATION FEE</span> : INR 200 </div>
              <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>PRIZE AMOUNT</span> : INR 4000 </div>
              <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>DATE AND TIME</span> : 13 MARCH - 7PM </div>
              <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>VENUE</span> : IN YOUR HOME </div>
              <div>
                <ul className='flex flex-col gap-2 text-b ase sm:text-lg my-3'> 
                  <li>1. EACH TEAM SHOULD HAVE 4 MEMBERS. </li>
                  <li>2. THREE MATCHES WILL BE CONDUCTED - ( ERANGLE, SANHOK, MIRAMAR ). </li>
                  <li className='font-medium'>3. ALL PLAYERS ARE REQUESTED TO DOWNLOAD THE MAPS.  </li>
                  <li>4. IF ANY PLAYER IS FOUND USING ANY HACKS OR GAME BUGS, THEN THE WHOLE TEAM WILL BE DISQUALIFIED. </li>
                  <li>5. DECISION MADE BY THE CO-ORDINATORS WILL BE FINAL IN ALL ASPECTS. </li>
                  <li>6. WINNERS WILL BE BASED ON BOTH KILLS AND CHICKEN DINNER. </li>
                  <li>7. EMULATORS NOT ALLOWED. </li>
                </ul>
              </div>
              <div className='bg-backGround rounded-xl py-2 px-5 space-y-3'>
              <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>REGISTRATION</span> : <a href='https://forms.gle/4qwRi1Fr1uiDmfc97' target='_blank' className='hover:text-orange'><span className='text-red hover:text-green underline'>LINK</span></a> ( SPOT REGISTRATION ALSO AVAILABLE )</div>

                <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>FOR FURTHER DETAILS CONTACT</span> : VIKRAM P - 9443615349</div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Bgmi