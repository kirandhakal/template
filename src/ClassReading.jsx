import React from 'react'
import DetaileFile from './components/DetaileFile'
import { Footer } from './components/Footer'
import Header from './components/Header'
import { StudentTable } from './components/StudentTable'
import { TitleSection } from './components/TitleSection'

export const ClassReading = () => {
  return (
    <>
    
     <Header></Header>
    <TitleSection />
    <DetaileFile></DetaileFile>
    <StudentTable />
    <Footer />
    </>
  )
}
