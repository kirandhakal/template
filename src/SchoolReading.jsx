import React from 'react'
import { Footer } from './components/Footer'
import Header from './components/Header'
import { TitleSection } from './components/TitleSection'
import DetaileFile from './components/DetaileFile'
import TableComponents from './components/TableComponents'


export const SchoolReading = () => {
  return (
    <>
  <Header></Header>
  <TitleSection />
  <DetaileFile></DetaileFile>
 <TableComponents />
  <Footer />
    </>
  )
}
