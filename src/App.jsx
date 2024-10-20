import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Team from './Team'
import Services from './Services'
import Reserve from './Reserve'


function App() {

  return (
      <div>
        <Header/>
        <Hero/>
        <About/>
        <Team/>
        <Services/>
        <Reserve/>
      </div>    
  )
}

export default App
