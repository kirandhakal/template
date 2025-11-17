import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./NavBar";
import NavBar from "./components/NavBar";

import { ClassReading } from './ClassReading';
import { SchoolReading } from './SchoolReading';
import { PersonalReading } from "./PersonalReading";

import './App.css';

function App() {
  return (
    <Router>
      {/* <NavBar /> */}

      <div className="app">
        <Routes> 
          <Route path="/" element={<PersonalReading />} />
           <Route path="/class" element={<ClassReading />} />
          <Route path="/school" element={<SchoolReading />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
