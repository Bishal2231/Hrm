
import './App.css'
import { Route, Routes } from "react-router-dom"
import Home from './Page/Home/Home'
import Holiday from './Page/Holiday'
import Designation from './Page/deignation'
import Employeepage from './Page/Employee/Employeepage'
import Signup from './SubPages/Signup/Signup'
import Attendance from './Page/Attendance'
import Login from './SubPages/Login/Login'
// import Attendanceemployee from './Page/Attendanceemployee'
import { Attendanceemployee } from './Page/Attendenceemployee'
import { Adminleave } from './Page/Adminleave'
import { Leavetypes} from './Page/Leavetypes'
import { Empleave } from './Page/Empleave'
import {Shifts} from './Page/Shifts'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/holiday" element={<Holiday />}/>
       <Route path="/designation" element={<Designation />} />
       <Route path="/employee" element={<Employeepage />} />
       <Route path="/attendance" element={<Attendance />} />
       <Route path="/attendanceemployee" element={<Attendanceemployee />} />
       <Route path="/adminleave" element={<Adminleave />}/>
       <Route path="/leavetypes" element={<Leavetypes />} />
       <Route path="/empleave" element={<Empleave />} />
       <Route path="/shifts" element={<Shifts />} />


        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />




      </Routes>

    </>
  )
}

export default App
