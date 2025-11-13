import React from "react";
import Header from "./Header";
import "../assets/css/ReportFile.css";

export default function ReportFile() {
  return (
    <>
<div class="ReportFile">
  <div class="description">
    <div class="school">
      <span class="label">School :  <span class="dots">...........</span></span>
     
    </div>

    <div class="info-row">
   
        <span class="label">Class :  <span class="dots">................</span></span>
       
  
      <div class="section">
        <span class="label">Section :  <span class="dots">.............</span></span>
      
      </div>
      <div class="assessment">
        <span class="label">Assessment Date : <span class="dots">..............</span></span>
      
      </div>
    </div>
  </div>
</div>

      
    </>
  );
}
