import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotAvail from './components/NotAvailable/NotAvailable'
import Home from './HomePage/Home'
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<NotAvail />} />
      </Routes>
    </Router>
  )
}

export default App
