
import './App.css'
import { Route, Routes } from "react-router-dom"
import Home from './Page/Home/Home'
import Holiday from './Page/Holiday'
import Designation from './Page/deignation'
import Employeepage from './Page/Employee/Employeepage'
import Signup from './SubPages/Signup/Signup'
import Attendance from './Page/Attendance'
import Login from './SubPages/Login/Login'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/holiday" element={<Holiday />}/>
       <Route path="/designation" element={<Designation />} />
       <Route path="/employee" element={<Employeepage />} />
       <Route path="/attendance" element={<Attendance />} />


        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />




      </Routes>

    </>
  )
}

export default App
