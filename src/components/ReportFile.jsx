import React from "react";
import Header from "./Header";
import "../assets/css/ReportFile.css";

export default function ReportFile() {
  return (
   <>
    

       

        {/* Metadata Section */}

        <div class="form-section">
          <div class="form-field school">
            {/* <p class="form-text">{"{school}"}</p> */}
           
            <label class="form-label">School....................................................................</label>
            
          </div>

          <div class="form-grid">
            <div class="form-field">
                {/* <p class="form-text">{"{class}"}</p> */}
              <label class="form-label">Class ............</label>
            
            </div>
            <div class="form-field">
              <label class="form-label">Section..................</label>
              {/* <p class="form-text">{"{section}"}</p> */}
            </div>
            <div class="form-field">
              <label class="form-label">Assessment Date ................</label>
              {/* <p class="form-text">{"{date}"}</p> */}
            </div>
          </div>
        </div>

        {/* Student Table */}
        
      {/* </div> */}
</>
  );
}
