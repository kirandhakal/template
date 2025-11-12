import React from "react";
import "../assets/css/ReportFile.css";

export const StudentTable = () => {
  return (
    <>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th rowSpan="2" className="th-sn">
                S.N.
              </th>
              <th rowSpan="2" className="th-name">
                Name of Students
              </th>
              <th colSpan="6" className="th-language">
                ENGLISH
              </th>
              <th colSpan="6" className="th-language">
                नेपाली
              </th>
            </tr>
            <tr>
              {["RSL", "PAUP", "IWC", "BCS", "UTC", "LRSF"].map((metric) => (
                <th key={`eng-${metric}`} className="th-metric">
                  {metric}
                </th>
              ))}
              {["RSL", "PAUP", "IWC", "BCS", "UTC", "LRSF"].map((metric) => (
                <th key={`nep-${metric}`} className="th-metric">
                  {metric}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Placeholder for dynamically inserted rows  */}
            {/* {'{studentsRows}'} */}

            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>A</td>
              <td>B</td>
              <td>A</td>
              <td>B</td>
              <td>A</td>
              <td>C</td>
              <td>B</td>
              <td>A</td>
              <td>B</td>
              <td>C</td>
              <td>A</td>
              <td>B</td>
            </tr>
            <tr>
              <td>2</td>
              <td>John Doe</td>
              <td>A</td>
              <td>B</td>
              <td>A</td>
              <td>B</td>
              <td>A</td>
              <td>C</td>
              <td>B</td>
              <td>A</td>
              <td>B</td>
              <td>C</td>
              <td>A</td>
              <td>B</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
