import React from "react";
import Header from "./Header";
import "../assets/css/ReportFile.css";

export default function ReportFile() {
  return (
    <>
      <div class="report-form-section">
        <div class="form-field school">
      

          <label class="form-label school">
            School....................................................................
                {/* <p class="form-text">{"{school}"}</p> */}
          </label>
        </div>

        <div class="form-grid">
          <div class="form-field">
           
            <label class="form-label other-label">Class ............
               {/* <p class="form-text">{"{class}"}</p> */}
            </label>
          </div>
          <div class="form-field">
            <label class="form-label other-label">Section..................</label>
            {/* <p class="form-text">{"{section}"}</p> */}
          </div>
          <div class="form-field">
            <label class="form-label other-label">Assessment Date ................</label>
            {/* <p class="form-text">{"{date}"}</p> */}
          </div>
        </div>
      </div>

      {/* Student Table */}

      {/* </div> */}
    </>
  );
}
