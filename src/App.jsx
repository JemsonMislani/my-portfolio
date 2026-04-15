import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { HeaderSection } from './components/Header'
import { SectionPage } from './components/Section'
import { FooterPage } from './components/Footer'
export default function App() {

  return (
    <BrowserRouter>
      <HeaderSection />
      <SectionPage />
      <FooterPage />
    </BrowserRouter>
  )
}

