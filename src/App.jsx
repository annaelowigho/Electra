import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './Layouts/Nav'
import Footer from './Layouts/Footer'
import Homepage from './Pages/Homepage'
import AboutUs from './Pages/AboutUs'
import CNG from './Pages/CNG'
import Services from './Pages/Services'

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about-us' element={<AboutUs />}/>
        <Route path='/cng' element={<CNG />}/>
        <Route path='/services' element={<Services />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
