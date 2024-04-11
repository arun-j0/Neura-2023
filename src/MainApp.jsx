import React from 'react'
import {NavBar, Header, Footer, Body} from './Containers'
import { Routes, Route} from 'react-router-dom';

const MainApp = () => {
  return (
    <div className="bg-black bg-[url('./Assets/phonebg.svg')] sm:bg-[url('./Assets/background.svg')] bg-no-repeat bg-fixed bg-center bg-cover">
        <NavBar />
        <Header />
        <Body />    
        <Footer />
    </div>
    
    )
}

export default MainApp