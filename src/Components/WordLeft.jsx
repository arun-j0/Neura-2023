import React from 'react'
import {Line} from './index.js'

// word aprm line

const WordLeft = ({text}) => {
  return (
    <div className='flex gap-3 items-center justify-end md:pt-3 text-center font-light text-white'>
    {/* <div className='flex gap-3 items-center justify-end md:pt-3 text-center font-light '> */}
        <p className='text-lg md:text-xl lg:text-3xl'>{text}</p>
        <Line />
    </div>
  )
}

export default WordLeft