import { ClassReading } from './ClassReading'
import { SchoolReading } from './SchoolReading'
import { PersonalReading } from "./PersonalReading";
import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        {/* <h1>Class reading form</h1>
      <ClassReading />
      <br /> <br /> */}
    
        {/* <div> <h1> School reading form</h1></div>
      <SchoolReading />
<br /> */}
        <PersonalReading />
      </div>
    </>
  );
}

export default App;
