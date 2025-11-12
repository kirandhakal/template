import React from 'react'
import "../assets/css/ReportFile.css";
export const Footer = () => {
  return (
   <>
   <div className="footer">
       <div className="form-grid-3">
            <div className="form-field">
               <p className="form-text">.........................</p>
               {/* <p className="form-text">{'{assessedBy}'}</p> */}
              <label className="footer-form-label">Assessed by</label>
             
            </div>
            <div className="form-field">
              {/* <p className="form-text">{'{issuedDate}'}</p> */}
              <p className="form-text">..........................</p>
              <label className="footer-form-label">Issued Date</label>
              
            </div>
            <div className="form-field">
               {/* <p className="form-text">{'{executiveChairman}'}</p> */}
                <p className="form-text">...........................</p>
              <label className="footer-form-label">Executive Chairman</label>
             
            </div>
          </div>
          </div>
        
   </>
    
    
  )
}
