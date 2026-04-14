import { HeaderSection } from './components/Header'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { SectionPage } from './components/Section'
export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HeaderSection />}/>
        <Route path='/home-page' element={<SectionPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

