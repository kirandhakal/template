import React from "react";
import "../assets/css/DetaileFile.css";
export default function Header() {
  return (
    <>
      <div class="header">
        <div className="image">
          <img
            src="src/assets/website_qr.png"
            alt="website"
            class="header-img left-img"
          />
       
        </div>

        <div class="header-text">
          <p class="header-title">राष्ट्रिय पठन संस्कृति विकास कार्यक्रम</p>
          <p class="header-subtitle">डिजिटल डिसिप्लिनका साथमा</p>
        </div>
        <div className="image">
          <img
            src="src/assets/location.png"
            alt="location"
            class="header-img right-img"
          />
       
        </div>
      </div>
    </>
  );
}
