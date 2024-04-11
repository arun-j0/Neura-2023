import React from 'react'
import { Link } from 'react-router-dom';
import {logo, seriesQuiz} from '../import';
import {IndividualTitle} from '../../Components'

const SeriesQuiz = () => {
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
          <IndividualTitle text='SERIES QUIZ' />
          <div className='sm:flex'>
            <img src={seriesQuiz} alt="" className='svg-hidden sm:w-96 sm:h-96'/>
            <div className='flex flex-col mx-2 text-left gap-2 '>
              <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>REGISTRATION FEE</span> : INR 75 </div>
              <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>PRIZE AMOUNT</span> : INR 3000 </div>
              <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>DATE AND TIME</span> : 13 MARCH - 3PM </div>
              <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>VENUE</span> : ROOM 2 - IT, PTU </div>
              <div>
                <ul className='flex flex-col gap-2 text-b ase sm:text-lg my-3'> 
                  <li>1. EACH TEAM SHOULD HAVE 2 MEMBERS. </li>
                  <li>2. THERE WILL BE 5 ROUNDS. </li>
                  <li>3. QUESTIONS WILL BE ASKED FROM GoT, FRIENDS, MONEY HEIST, WANDA VISION, LOKI </li>
                  <li>4. WINNERS WILL BE DECIDED BASED ON THE SCORE.</li>
                  <li>5. DECISION MADE BY THE CO-ORDINATORS WILL BE FINAL IN ALL ASPECTS. </li>
                </ul>
              </div>
              <div className='bg-backGround rounded-xl py-2 px-5 space-y-3'>
                <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>REGISTRATION</span> : <a href='https://forms.gle/qBfALqmWd1HLAecM7' target='_blank' className='hover:text-orange'><span className='text-red hover:text-green underline'>LINK</span></a> ( SPOT REGISTRATION ALSO AVAILABLE )</div>
                <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>FOR FURTHER DETAILS CONTACT</span> : BHUVANA I - 9345576605</div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default SeriesQuiz