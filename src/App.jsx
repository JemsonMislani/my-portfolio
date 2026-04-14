import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { HeaderSection } from './components/Header'
import { SectionPage } from './components/Section'
export default function App() {

  return (
    <BrowserRouter>
      <HeaderSection />
      <SectionPage />
    </BrowserRouter>
  )
}

