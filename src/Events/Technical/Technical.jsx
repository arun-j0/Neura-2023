import React from 'react'
import { Title, Card } from '../../Components'

const Technical = () => {
  return (
    <div className='max-w-6xl mx-auto text-2xl px-2 scroll-mt-40 '>
      <Title text='TECHNICAL EVENTS'/>
      <div className='container mx-auto py-3'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-5'>
          <Card title='Relay Coding' description='Where team matters than individual' linkTo ='/Technical/RallyCoding' index={1} />
          <Card title='Blind Coding' description='Programing needs no eye' linkTo ='/Technical/BlindCoding' index={2}/>
          <Card title='Web Design' description='Design means a lot' linkTo ='/Technical/WebDesign' index={3}/>
          <Card title='Debug the Code' description='Debugging is what we do all day' linkTo ='/Technical/DebugCode' index={4}/>
          <Card title='Technical Quiz' description='Lets test the basics' linkTo ='/Technical/TechnicalQuiz' index={5}/>
        </div>
      </div>
    </div>
  )
}

export default Technical