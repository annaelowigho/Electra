import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './Layouts/Nav'
import Footer from './Layouts/Footer'
import Homepage from './Pages/Homepage'
import AboutUs from './Pages/AboutUs'

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about-us' element={<AboutUs />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
