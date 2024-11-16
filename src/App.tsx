import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { NavbarHeightProvider } from './context/NavbarHeightContext';
import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Structure from './pages/Structure'
import Contact from './pages/Contact'
import { NAV_TITLE, FOOTER_TITLE, COPYRIGHT, EMAIL, NAV_MOBILE_TITLE } from './copies'

function App() {
  return (
    <NavbarHeightProvider>
      <Router>
        <Nav mobileTitle={NAV_MOBILE_TITLE} title={NAV_TITLE} />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/structure" Component={Structure} />
          <Route path="/contact" Component={Contact} />
        </Routes>
        <Footer title={FOOTER_TITLE} copyright={COPYRIGHT} email={EMAIL} />
      </Router>
    </NavbarHeightProvider>
  )
}

export default App
