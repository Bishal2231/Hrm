
import './App.css'
import { Route, Routes } from "react-router-dom"
import Home from './Page/Home/Home'
import Holiday from './Page/Holiday'
import Designation from './Page/deignation'
import Employeepage from './Page/Employee/Employeepage'
import Attendance from './Page/Attendance'
// import Attendanceemployee from './Page/Attendanceemployee'
import { Attendanceemployee } from './Page/Attendenceemployee'
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



      </Routes>

    </>
  )
}

export default App
