import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ForOwners from './pages/ForOwners'
import ForAdvisers from './pages/ForAdvisers'
import Pricing from './pages/Pricing'
import HowItWorks from './pages/HowItWorks'
import BookScan from './pages/BookScan'
import ReferOwner from './pages/ReferOwner'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <div className="min-h-screen bg-page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
          <Route path="/for-owners" element={<ForOwners />} />
          <Route path="/for-advisers" element={<ForAdvisers />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/book-a-founder-scan" element={<BookScan />} />
          <Route path="/refer-an-owner" element={<ReferOwner />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
