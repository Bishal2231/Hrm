
import './App.css'
import { Route, Routes } from "react-router-dom"
import Home from './Page/Home/Home'
import Signup from './SubPages/Signup/Signup'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />



      </Routes>

    </>
  )
}

export default App
