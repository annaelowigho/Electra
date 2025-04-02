import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './Layouts/Nav'
import Footer from './Layouts/Footer'
import Homepage from './Pages/Homepage'

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
