import React from 'react'
import { NavBar, Header, Footer, Body } from './Containers'
import MainApp from './MainApp';
import { Routes, Link, Route} from 'react-router-dom';

import {RallyCoding, BlindCoding, WebDesign, TechnicalQuiz, DebugCode} from './Events';
import {BGMI, FreeFire, BombSquad, MiniMilita, ClashRoyale, FootBall} from './Events'
import {BringThingsToLife, Extempore,  Potpourri, SpellBee, WhatsTheClimax} from './Events'
import {AdaptTunes, VVG, VVS, BackToSch, Eatathon, PushUps, SeriesQuiz, SoloDance, SoloSinging, TreasureHunt, SpotPhoto, FunZone, TeaserMaking, MurderMystery} from './Events'
// import {ScrollToTop} from './Components'


const App = () => {
  return (

    <div className='overflow-x-hidden'>

      <Routes>
        
        <Route exact path='/' element={<MainApp />}></Route>

        {/* technical route */}
        <Route exact path= 'Technical/Rallycoding' element={<RallyCoding />}></Route>
        <Route exact path= 'Technical/BlindCoding' element={<BlindCoding />}></Route>
        <Route exact path= 'Technical/WebDesign' element={<WebDesign />}></Route>
        <Route exact path= 'Technical/TechnicalQuiz' element={<TechnicalQuiz />}></Route>
        <Route exact path= 'Technical/DebugCode' element={<DebugCode />}></Route>

        {/* Gaming route */}
        <Route exact path= 'Gaming/BGMI' element={<BGMI />}></Route>
        <Route exact path= 'Gaming/FreeFire' element={<FreeFire />}></Route>
        <Route exact path= 'Gaming/BombSquad' element={<BombSquad />}></Route>
        <Route exact path= 'Gaming/ClashRoyale' element={<ClashRoyale />}></Route>
        <Route exact path= 'Gaming/MiniMilita' element={<MiniMilita />}></Route>
        <Route exact path= 'Gaming/FootBall' element={<FootBall />}></Route>


         {/* literary route */}
        <Route exact path= 'Literary/SpellBee' element={<SpellBee />}></Route>
        <Route exact path= 'Literary/Potpourri' element={<Potpourri />}></Route>
        <Route exact path= 'Literary/Extempore' element={<Extempore />}></Route>
        <Route exact path= 'Literary/BringThingsToLife' element={<BringThingsToLife />}></Route>
        <Route exact path= '/Literary/WhatsTheClimax' element={<WhatsTheClimax />}></Route>

        {/* technical route */}
        <Route exact path= 'NonTechnical/AdaptTunes' element={<AdaptTunes />}></Route>
        <Route exact path= 'NonTechnical/SeriesQuiz' element={<SeriesQuiz />}></Route>
        <Route exact path= 'NonTechnical/SoloDancing' element={<SoloDance />}></Route>
        <Route exact path= 'NonTechnical/SoloSinging' element={<SoloSinging />}></Route>
        <Route exact path= 'NonTechnical/PushUps' element={<PushUps />}></Route>
        <Route exact path= 'NonTechnical/TreasureHunt' element={<TreasureHunt />}></Route>
        <Route exact path= 'NonTechnical/VarietyVarietyGroup' element={<VVG />}></Route>
        <Route exact path= 'NonTechnical/VarietyVarietySolo' element={<VVS />}></Route>
        <Route exact path= 'NonTechnical/Eatathon' element={<Eatathon />}></Route>
        <Route exact path= 'NonTechnical/BackToSch' element={<BackToSch />}></Route>
        <Route exact path= 'NonTechnical/SpotPhoto' element={<SpotPhoto />}></Route>
        <Route exact path= 'NonTechnical/FunZone' element={<FunZone />}></Route>
        <Route exact path= 'NonTechnical/MurderMystery' element={<MurderMystery />}></Route>
        <Route exact path= 'NonTechnical/TeaserMaking' element={<TeaserMaking />}></Route>
        
      </Routes>

    </div>
  )
}

export default App