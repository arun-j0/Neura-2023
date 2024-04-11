import React from 'react'
import { Title, Card } from '../../Components'

const Literary = () => {
  return (
    <div className='max-w-6xl mx-auto text-2xl px-2 scroll-mt-40 '>
      <Title text='LITERARY EVENTS'/>
      <div className='container mx-auto py-3'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-5'>
          <Card title='Spell Bee' description='Spell it win it ' linkTo ='/Literary/SpellBee'/>
          <Card title='Pot Pourri' description='It has a lot to say' linkTo ='/Literary/PotPourri'/>
          <Card title='Extempore' description='Speech is power' linkTo ='/Literary/Extempore'/>
          <Card title='Bring Things to Life' description='Where things gets its life' linkTo ='/Literary/BringThingsToLife'/>
          <Card title="What's The Climax" description='End is a new beginning' linkTo ='/Literary/WhatsTheClimax'/>
        </div>
      </div>
    </div>
  )
}

export default Literary