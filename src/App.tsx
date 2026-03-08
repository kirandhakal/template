import './App.css'
import ImmigrationForm from './components/ImmigrationForm'
import formData from './data/formData.json'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ImmigrationForm data={formData} />
    </div>
  )
}

export default App
