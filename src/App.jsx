import { HeaderSection } from './components/Header'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HeaderSection />}/>
        
      </Routes>
    </BrowserRouter>
  )
}

