import React from "react";
import "../assets/css/DetaileFile.css";

export default function DetaileFile({
  showSchool = true,
  showClass = true,
  showSection = true,
  showAssessmentDate = true,
}) {
  return (
    <div className="DetaileFile">
      <div className="description">

        {/* SCHOOL */}
        {showSchool && (
          <div className="school">
            <span className="label">
              School :
              <span className="dots">
                ..............................................
              </span>
            </span>
          </div>
        )}

        <div className="info-row">

          {/* CLASS */}
          {showClass && (
            <span className="label">
              Class From :
              <span className="dots">...................</span>
            </span>
          )}

          {/* SECTION */}
          {showSection && (
            <div className="section">
              <span className="label">
                Section :
                <span className="dots">.............</span>
              </span>
            </div>
          )}

          {/* ASSESSMENT DATE */}
          {showAssessmentDate && (
            <div className="assessment">
              <span className="label">
                Assessment Date :
                <span className="dots">..............</span>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
