import React from 'react'
import { Title, Card } from '../../Components'

const OnlineEvents = () => {
  return (
    <div className='max-w-6xl mx-auto text-2xl px-2 '>
      <Title text='GAMING EVENTS'/>
      <div className='container mx-auto py-3'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-5'>
          <Card title='BGMI' description="Victor mama's Kingdom" linkTo ='/Gaming/BGMI'/>
          <Card title='Clash Royale' description='Break the enemy castel' linkTo ='/Gaming/ClashRoyale'/>
          <Card title='Mini Milita' description="Where size doesn't matter" linkTo ='/Gaming/MiniMilita'/>
          <Card title='Bomb Squad' description="Let's put a Bomb" linkTo ='/Gaming/BombSquad'/>
          <Card title='Free Fire' description='Get those Booyah!' linkTo ='/Gaming/FreeFire'/>
          <Card title='E-FootBall' description='Make those Goals' linkTo ='/Gaming/FootBall'/>
        </div>
      </div>
    </div>
  )
}

export default OnlineEvents