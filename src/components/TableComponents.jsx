import React from "react";
import "../assets/css/TableComponent.css";

const TableComponents = ({classes , nepaliclasses}) => {
  // Static data for the table
  const englishSkills = [
    { sn: 1, skill: "Recognition of Symbols and Letters (RSL)" },
    { sn: 2, skill: "Phonemic Awareness Use & Pronunciation (PAUP)" },
    { sn: 3, skill: "Identifying Words & Context Use (IWC)" },
    { sn: 4, skill: " Basic Comprehension Skills (BCS)" },
    { sn: 5, skill: "Understanding Text and Context (UTC)" },
    { sn: 6, skill: "Loud Reading Skills & Fluency (LRSF)" },
  ];

  const nepaliSkills = [
    { sn: 1, skill: "अक्षर तथा संकेतहरुको पहिचान (RSL" },
    { sn: 2, skill: "अक्षर तथा शब्दहरुको प्रष्ट उच्चारण (PAUP)" },
    { sn: 3, skill: "शब्द र चित्रको अर्थपूर्ण पहिचान र प्रयोग (IWC)" },
    { sn: 4, skill: "आधारभूत बोध र प्रश्न उत्तर क्षमता (BCS)" },
    { sn: 5, skill: "पाठको सार, सन्दर्भ र उपयोगिताको बुझाई (UTC)" },
    { sn: 6, skill: "सस्वर वाचन, पठन गति र प्रवाह (LRSF)" },
  ];

  // const classes = ["UKG", "Class 1", "Class 2", "Class 3"];

  // const nepaliclasses = ["युकेजी", "कक्षा १", "कक्षा २", "कक्षा ३"];

  return (
    <div className="table-container">
      <h2>ENGLISH</h2>
      <table>
        <thead>
          <tr>
            <th>S.N.</th>
            <th>Reading Assessment Components</th>
            {classes.map((cls) => (
              <th key={cls} className="">{cls}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {englishSkills.map((item) => (
            <tr key={item.sn}>
              <td>{item.sn}</td>
              <td>{item.skill}</td>
              {classes.map((cls) => (
                <td key={cls}></td>
              ))}{" "}
            </tr>
          ))}
        </tbody>
      </table>

      <h1>नेपाली</h1>
      <table>
        <thead>
          <tr>
            <th>सि.न.</th>
            <th>पढाई मूल्याङ्कनका तत्वहरू</th>
            {nepaliclasses.map((cls) => (
              <th key={cls}>{cls}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {nepaliSkills.map((item) => (
            <tr key={item.sn}>
              <td>{item.sn}</td>
              <td>{item.skill}</td>
              {classes.map((cls) => (
                <td key={cls}></td>
              ))}{" "}
              {/* Empty cells for now */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponents;
