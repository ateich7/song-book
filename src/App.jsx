import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Song from './pages/Song';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Song />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
