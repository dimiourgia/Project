import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Home from './pages/Home.jsx'


import './App.css'

function App() {

  return (
    <>
      <div className='container'>
        <Router>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
