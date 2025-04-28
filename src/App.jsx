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
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import BookNow from './Pages/BookNow'
import ServiceDetails from './Components/ServiceDetails'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

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
            <Route path='/services/:id' element={<ServiceDetails />}/>
            <Route path='/training' element={<Training />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/careers' element={<Careers />} />
            <Route path='/book-now' element={<BookNow />} />
          </Routes>
          <Footer />
      </Loader>
      
    </>
  )
}

export default App
