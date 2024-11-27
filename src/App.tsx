import { AnimatePresence } from "framer-motion";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { NavbarHeightProvider } from './context/NavbarHeightContext';
import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home'
import Structure from './pages/Structure'
import Contact from './pages/Contact'
import TestimonialDetail from './pages/TestimonialDetail'
import { NAV_TITLE, FOOTER_TITLE, COPYRIGHT, EMAIL, NAV_MOBILE_TITLE } from './copies'

function App() {
  return (
    <AnimatePresence mode="wait">
      <NavbarHeightProvider>
        <Router>
          <ScrollToTop />
          <Nav mobileTitle={NAV_MOBILE_TITLE} title={NAV_TITLE} />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/structure" Component={Structure} />
            <Route path="/contact" Component={Contact} />
            <Route path="/testimonials" Component={TestimonialDetail} />
          </Routes>
          <Footer title={FOOTER_TITLE} copyright={COPYRIGHT} email={EMAIL} />
        </Router>
      </NavbarHeightProvider>
    </AnimatePresence>
  )
}

export default App
