import React from 'react'
import { Line } from './index'

const Title = ( {text}) => {
  return (
        <div className='flex gap-3 items-center justify-start text-center pt-2 md:pt-4 font-light mb-3 text-white-custom'>
          <p className=' order-2 text-lg md:text-xl lg:text-3xl text-center'>{text}</p>
          <Line className='order-1'/>
      </div>
  )
}

export default Title