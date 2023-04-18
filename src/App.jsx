import { useState } from 'react'
import './App.css'
import GeneralInfos from './components/GeneralInfo'
import Objective from './components/Objective'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import EducationDetails from './components/Education'

function App() {

  return (
    <div className="App">
      <h1 className='app-heading'>Resume Builder</h1>
      <GeneralInfos />
      <h2 className='headings'>Objective</h2>
      <Objective />
      <h2 className='headings'>Skills</h2>
      <Skills />
      <h2 className='headings'>Work Experience</h2>
      <WorkExperience />
      <h2 className='headings'>Education</h2>
      <EducationDetails />
    </div>
  )
}

export default App
