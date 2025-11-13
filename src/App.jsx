import ReportFile from './components/ReportFile'
import { Footer } from './components/Footer'
import Header from './components/Header'
import { StudentTable } from './components/StudentTable'
import { TitleSection } from './components/TitleSection'
import './App.css'

function App() {
  
  return (
    <>
    <div className="app">
    <Header></Header>
    <TitleSection />
    <ReportFile></ReportFile>
    <StudentTable />
    <Footer />
      {/* <h2>hello</h2> */}
      </div>
    </>
  )
}

export default App
