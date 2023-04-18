import { useState } from 'react'
import './App.css'
import GeneralInfos from './components/GeneralInfo'
import Objective from './components/Objective'
import Skills from './components/Skills'

function App() {

  return (
    <div className="App">
      <h1>Resume Builder</h1>
      <GeneralInfos />
      <h2 className='headings'>Objective</h2>
      <Objective />
      <h2 className='headings'>Skills</h2>
      <Skills />
    </div>
  )
}

export default App
