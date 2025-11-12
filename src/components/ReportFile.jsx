import React, { useState } from 'react';
import '../assets/css/ReportFile.css'


export default function ReportFile() {
  const [formData, setFormData] = useState({
    school: '',
    class: '',
    section: '',
    assessmentDate: '',
    issuedDate: '',
    assessedBy: '',
    executiveChairman: ''
  });

  const [students, setStudents] = useState(
    Array(10).fill(null).map((_, i) => ({
      id: i + 1,
      name: '',
      english: { rsl: '', paup: '', iwc: '', bcs: '', utc: '', lrsf: '' },
      nepali: { rsl: '', paup: '', iwc: '', bcs: '', utc: '', lrsf: '' }
    }))
  );

  const handleFormChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleStudentChange = (index, field, value) => {
    setStudents(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const handleScoreChange = (index, language, metric, value) => {
    setStudents(prev => {
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        [language]: { ...updated[index][language], [metric]: value }
      };
      return updated;
    });
  };

  return (
    <div className="container">
      <div className="report-wrapper">
        {/* Header */}
        <div className="header">
          <div className="header-content">
            <div>
             <img src="" alt="website" />
              <p className="header-title">शिक्षा गुणस्तर संवृद्धिकरण विकास कार्यक्रम</p>
              <p className="header-subtitle">डिजिटल डिसिप्लिनका साथमा</p>
              <img src="" alt="location" />
            </div>
            <div className="button-group">
             
            </div>
          </div>
        </div>

      <h1 className="title">CLASS READING PROFICIENCY REPORT</h1>
        <div className="form-section">
          <div className="form-grid-4">
            
            <div className="form-field">
                
              <label className="form-label">School</label>
              <input
                type="text"
                value={formData.school}
                onChange={(e) => handleFormChange('school', e.target.value)}
                className="form-input"
                placeholder="Enter school name"
              />
            </div>
            <div className="form-field">
              <label className="form-label">Class</label>
              <input
                type="text"
                value={formData.class}
                onChange={(e) => handleFormChange('class', e.target.value)}
                className="form-input"
                placeholder="Enter class"
              />
            </div>
            <div className="form-field">
              <label className="form-label">Section</label>
              <input
                type="text"
                value={formData.section}
                onChange={(e) => handleFormChange('section', e.target.value)}
                className="form-input"
                placeholder="Enter section"
              />
            </div>
            <div className="form-field">
              <label className="form-label">Assessment Date (२०८२)</label>
              <input
                type="text"
                value={formData.assessmentDate}
                onChange={(e) => handleFormChange('assessmentDate', e.target.value)}
                className="form-input"
                placeholder="YYYY-MM-DD"
              />
            </div>
          </div>
          {/*  */}
        </div>

        {/* Student Data Table */}
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th rowSpan="2" className="th-sn">S.N.</th>
                <th rowSpan="2" className="th-name">Name of Students</th>
                <th colSpan="6" className="th-language">ENGLISH</th>
                <th colSpan="6" className="th-language">नेपाली</th>
              </tr>
              <tr>
                {['RSL', 'PAUP', 'IWC', 'BCS', 'UTC', 'LRSF'].map(metric => (
                  <th key={`eng-${metric}`} className="th-metric">{metric}</th>
                ))}
                {['RSL', 'PAUP', 'IWC', 'BCS', 'UTC', 'LRSF'].map(metric => (
                  <th key={`nep-${metric}`} className="th-metric">{metric}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {students.map((student, idx) => (
                <tr key={student.id} className="table-row">
                  <td className="td-sn">{student.id}.</td>
                  <td className="td-name">
                    <input
                      type="text"
                      value={student.name}
                      onChange={(e) => handleStudentChange(idx, 'name', e.target.value)}
                      className="input-name"
                    />
                  </td>
                  {['rsl', 'paup', 'iwc', 'bcs', 'utc', 'lrsf'].map(metric => (
                    <td key={`${idx}-eng-${metric}`} className="td-metric">
                      <input
                        type="text"
                        value={student.english[metric]}
                        onChange={(e) => handleScoreChange(idx, 'english', metric, e.target.value)}
                        className="input-metric"
                      />
                    </td>
                  ))}
                  {['rsl', 'paup', 'iwc', 'bcs', 'utc', 'lrsf'].map(metric => (
                    <td key={`${idx}-nep-${metric}`} className="td-metric">
                      <input
                        type="text"
                        value={student.nepali[metric]}
                        onChange={(e) => handleScoreChange(idx, 'nepali', metric, e.target.value)}
                        className="input-metric"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="form-grid-3">
              <div className="form-field">
              <label className="form-label">Assessed by</label>
              <input
                type="text"
                value={formData.assessedBy}
                onChange={(e) => handleFormChange('assessedBy', e.target.value)}
                className="form-input"
                placeholder="Assessor name"
              />
            </div>
            <div className="form-field">
              <label className="form-label">Issued Date</label>
              <input
                type="text"
                value={formData.issuedDate}
                onChange={(e) => handleFormChange('issuedDate', e.target.value)}
                className="form-input"
                placeholder="YYYY-MM-DD"
              />
            </div>
          
            <div className="form-field">
              <label className="form-label">Executive Chairman</label>
              <input
                type="text"
                value={formData.executiveChairman}
                onChange={(e) => handleFormChange('executiveChairman', e.target.value)}
                className="form-input"
                placeholder="Chairman name"
              />
            </div>
          </div>
        </div>

      
      </div>
    </div>
  );
}