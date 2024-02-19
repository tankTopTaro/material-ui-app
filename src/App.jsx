import { Routes, Route } from "react-router-dom"
import Create from './pages/Create'
import Notes from './pages/Notes'

function App() {

  return (
    <Routes>
      <Route exact path="/" element={<Notes />}/>
      <Route path="/create" element={<Create />}/>
    </Routes>
  )
}

export default App
