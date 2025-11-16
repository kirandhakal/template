import React from "react";
import "../assets/css/Personalreading.css";

export default function StudentReportForm({ student = {} }) {
  const {
    name = "",
    className = "",
    section = "",
    school = "",
    schoolAddress = "",
    assessmentDate = "",
  } = student;

  return (
    <div className="student-card">
      <div className="row">
        <label className="label">Student's Name : ......................</label>
        <div className="line name-line">{name}</div>
      </div>

      <div className="row two-cols">
        <div className="col">
          <label className="label">Class : ...........................</label>
          <div className="line short-line">{className}</div>
        </div>

        <div className="col">
          <label className="label">Section : ...........................</label>
          <div className="line short-line">{section}</div>
        </div>
      </div>

      <div className="row">
        <label className="label">School : ...................... </label>
        <div className="line">{school}</div>
      </div>

      <div className="row">
        <label className="label">School address : ......................</label>
        <div className="line">{schoolAddress}</div>
      </div>

      <div className="row">
        <label className="label">
          Assessment date : ......................
        </label>
        <div className="line short-line">{assessmentDate}</div>
      </div>
    </div>
  );
}
