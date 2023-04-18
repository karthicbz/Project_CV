import { useState } from 'react'
import './App.css'
import GeneralInfos from './components/GeneralInfo'
import Objective from './components/Objective'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import EducationDetails from './components/Education'
import { Heading } from '@chakra-ui/react'

function App() {

  return (
    <div className="App">
      {/* <h1 className='app-heading'>Resume Builder</h1>
       */}
       <Heading as='h4' size='md' className='app-heading'>Resume Builder</Heading>
      <GeneralInfos />
      <Heading as='h5' size='sm' className='headings'>Objective</Heading>
      <Objective />
      <Heading as='h5' size='sm' className='headings'>Skills</Heading>
      <Skills />
      <Heading as='h5' size='sm' className='headings'>Work Experience</Heading>
      <WorkExperience />
      <Heading as='h5' size='sm' className='headings'>Education</Heading>
      <EducationDetails />
    </div>
  )
}

export default App
