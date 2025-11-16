import React from 'react'
// import "../assets/css/DetaileFile.css "

export const TitleSection = ({Name}) => {
  return (
   <>
     <div className="title">
          <img src="src/assets/logo1.webp" alt="logo1" />
          <h1>{Name} READING PROFICIENCY REPORT</h1>
          <img src="src/assets/logo1.webp" alt="logo2" />
        </div>
   </>
export const TitleSection = ({ Name }) => {

  return (
    <div className="title">
      <img src="src/assets/logo1.webp" alt="logo1" />
      <h1>{Name} READING PROFICIENCY REPORT</h1>
      <img src="src/assets/logo1.webp" alt="logo2" />
    </div>
  )
}
