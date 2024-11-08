import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { NAV_TITLE, FOOTER_TITLE, COPYRIGHT, EMAIL } from './copies'

function App() {
  return (
    <>
      {/* <Nav title={NAV_TITLE} />
      <div>hsdsdsdi</div> */}
      <Footer title={FOOTER_TITLE} copyright={COPYRIGHT} email={EMAIL} />
    </>
  )
}

export default App
