import React from 'react'
import {Technical, OnlineEvents ,Literary, NonTechnical} from '../Events'

const EventsContainer = () => {
  return (
    <div id='events' className='scroll-mt-24 mt-24 '>
        <div className='text-center text-xl sm:text-5xl sm:mb-2  sm:mt-10 text-gold font-cinel'>EVENTS</div>
        <div className='w-auto bg-white rounded-lg z-10 backdrop-filter backdrop-blur-lg bg-opacity-[20%] max-w-2xl mx-6 sm:mx-auto p-2 sm:p-3'>
          <div className='text-center text-xs sm:text-2xl m-2 sm:mx-3 font-light text-gold'>Date and Time is specified in the event description.</div>
          <div className='text-center text-xs sm:text-2xl m-2 sm:mx-3 font-light text-gold'>We request all participants to schedule accordingly.</div>
          <div className='text-center text-xs sm:text-2xl m-2 sm:mx-3 font-light text-gold'>So that the events you register do not collide.</div>
        </div>

          <Technical />
          <NonTechnical />
          <OnlineEvents />
          <Literary />
    </div>
  )
}

export default EventsContainer