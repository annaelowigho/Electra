import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './Layouts/Nav'
import Footer from './Layouts/Footer'
import Homepage from './Pages/Homepage'
import AboutUs from './Pages/AboutUs'
import CNG from './Pages/CNG'
import Services from './Pages/Services'
import Training from './Pages/Training'
import ContactUs from './Pages/ContactUs'
import ScrollToTop from './Layouts/ScrollToTop'
import Loader from './Components/Loader'
import Careers from './Pages/Careers'

function App() {

  return (
    <>
      
      <Loader>
          <Nav />
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/electra' element={<AboutUs />}/>
            <Route path='/cng' element={<CNG />}/>
            <Route path='/services' element={<Services />} />
            <Route path='/training' element={<Training />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/careers' element={<Careers />} />
          </Routes>
          <Footer />
      </Loader>
      
    </>
  )
}

export default App
