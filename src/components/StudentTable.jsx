import "../assets/css/DetaileFile.css";

export const StudentTable = () => {

  const students = [
    {
      sn: 1,
      name: "kiran dhakal",
      english: ["A", "B", "A", "B", "A", "C"],
      nepali: ["B", "A", "B", "C", "A", "B"]
    },
    {
      sn: 2,
      name: "ram Rai",
      english: ["B", "A", "B", "C", "A", "A"],
      nepali: ["A", "B", "A", "B", "B", "C"]
    }
  ];

  return (
    <>
      <div className="student-table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th rowSpan="2" className="th-sn">S.N.</th>
              <th rowSpan="2" className="th-name">Name of Students</th>
              <th colSpan="6" className="th-language">ENGLISH</th>
              <th colSpan="6" className="th-language">नेपाली</th>
            </tr>

            <tr>
              {["RSL", "PAUP", "IWC", "BCS", "UTC", "LRSF"].map((metric) => (
                <th key={`eng-${metric}`}>{metric}</th>
              ))}
              {["RSL", "PAUP", "IWC", "BCS", "UTC", "LRSF"].map((metric) => (
                <th key={`nep-${metric}`}>{metric}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {students.map((std, index) => (
              <tr key={index}>
                <td>{std.sn}</td>
                <td className="name-cell">{std.name}</td>

                {std.english.map((mark, i) => (
                  <td key={`eng-${index}-${i}`}>{mark}</td>
                ))}

                {std.nepali.map((mark, i) => (
                  <td key={`nep-${index}-${i}`}>{mark}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
