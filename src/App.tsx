import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { NAV_TITLE, FOOTER_TITLE, COPYRIGHT, EMAIL, NAV_MOBILE_TITLE } from './copies'

function App() {
  return (
    <>
      <Nav mobileTitle={NAV_MOBILE_TITLE} title={NAV_TITLE} />
      <div>hsdsdsdi</div>
      <div>hsdsdsdi</div>
      <div>hsdsdsdi</div>
      <div>hsdsdsdi</div>
      <div>hsdsdsdi</div>
      <div>hsdsdsdi</div>
      <div>hsdsdsdi</div>
      <div>hsdsdsdi</div>
      <div>hsdsdsdi</div>
      <div>hsdsdsdi</div>
      <div>hsdsdsdi</div>
      <div>hsdsdsdi</div>
      <Footer title={FOOTER_TITLE} copyright={COPYRIGHT} email={EMAIL} />
    </>
  )
}

export default App
