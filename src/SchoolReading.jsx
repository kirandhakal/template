import React from 'react'
import { Footer } from './components/Footer'
import Header from './components/Header'
import { TitleSection } from './components/TitleSection'
import DetaileFile from './components/DetaileFile'
import TableComponents from './components/TableComponents'


export const SchoolReading = () => {
  return (
    <>
    <div className="schoolReading">
  <Header></Header>
  <TitleSection Name={"SCHOOL"}/>
  <DetaileFile></DetaileFile>
    <TableComponents classes={["UKG ", "CLASS 1 ", "CLASS 3 ", "CLASS 4 "]} nepaliclasses={["युकेजी", "कक्षा १", "कक्षा २", "कक्षा ३"]} />

 {/* <TableComponents /> */}
  <Footer />
  </div>
    </>
  )
}
