import React from "react";
import Header from "./Header";
// import "../assets/css/ReportFile.css";
import "../assets/css/DetaileFile.css";

export default function DetaileFile() {
  return (

    <>
<div class="DetaileFile">
  <div class="description">
    <div class="school">
      <span class="label">School :  <span class="dots">..............................................................................................</span></span>
     
    </div>

    <div class="info-row">
   
        <span class="label">Class From :  <span class="dots">...................</span></span>
       
  
      {/* <div class="section">
        <span class="label">Section :  <span class="dots">.............</span></span>
      
      </div> */}
      <div class="assessment">
        <span class="label">Assessment Date : <span class="dots">..............</span></span>
      
      </div>
    </div>
  </div>
</div>

      
    </>
  );
}
