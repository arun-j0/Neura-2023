import React from 'react'
import { Title, Card } from '../../Components'

const NonTechnical = () => {
  return (
    <div className='max-w-6xl mx-auto text-2xl px-2 scroll-mt-40 '>
      <Title text='NON TECHNICAL EVENTS'/>
      <div className='container mx-auto py-3'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-5'>
          <Card title='Fun Zone' description='Jollyaaa erukanum' linkTo ='/NonTechnical/FunZone'/>
          <Card title='Murder Mystery' description='Who is the victim ?' linkTo ='/NonTechnical/MurderMystery'/>
          <Card title='Teaser Making' description='Make those Videos' linkTo ='/NonTechnical/TeaserMaking'/>
          <Card title='Adapt Tunes' description='Adapt to win' linkTo ='/NonTechnical/AdaptTunes'/>
          <Card title='Back To School' description='Those good old days' linkTo ='/NonTechnical/BackToSch'/>
          <Card title='Eatathon' description='Eat it - kill it' linkTo ='/NonTechnical/Eatathon'/>
          <Card title='Push Ups' description="Let's push to the extreme" linkTo ='/NonTechnical/PushUps'/>
          <Card title='Series Quiz' description='Place for the Series psycho' linkTo ='/NonTechnical/SeriesQuiz'/>
          <Card title='Solo Dancing' description='Express those solo movements' linkTo ='/NonTechnical/SoloDancing'/>
          <Card title='Solo Singing' description='Sing for Life' linkTo ='/NonTechnical/SoloSinging'/>
          <Card title='Variety Variety Solo' description="Whatelse a solo can't do" linkTo ='/NonTechnical/VarietyVarietySolo'/>
          <Card title='Variety Variety Group' description='Move together, feel the rhythm' linkTo ='/NonTechnical/VarietyVarietyGroup'/>
          <Card title='Scavenger Hunt' description='Hunt for Life' linkTo ='/NonTechnical/TreasureHunt'/>
          <Card title='On Spot PhotoGraphy' description='Capture moments, tell your story.' linkTo ='/NonTechnical/SpotPhoto'/>
        </div>
      </div>
    </div>
  )
}

export default NonTechnical