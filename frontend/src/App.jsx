
import './App.css'
import { Route, Routes } from "react-router-dom"
import Home from './Page/Home/Home'
import Holiday from './Page/Holiday'
import Designation from './Page/deignation'
import Employeepage from './Page/Employee/Employeepage'
import Signup from './SubPages/Signup/Signup'
// import Attendance from './Page/Attendance'

import Login from './SubPages/Login/Login'
// import Attendanceemployee from './Page/Attendanceemployee'
import { Attendanceemployee } from './Page/Attendenceemployee'
import { Adminleave } from './Page/Adminleave'
import { Leavetypes} from './Page/Leavetypes'
import { Empleave } from './Page/Empleave'
import { Shifts } from './Page/Shifts'
import TopNav from './components/essentials/TopNav'
import { Sidebar } from 'lucide-react'
import MainuContainer from './components/essentials/MainuContainer'
import Attendanceadmin from './Page/Attendanceadmin'
import VerifyOTP from './SubPages/Verify-otp/VerifyOTP'
import {AddEmployeePage} from './SubPages/Addemployee/Addemployee'
import {Shifts} from './Page/Shifts'
import Department from './Page/Department'


function App() {



  return (
    <>
      <div className='flex flex-col'> 
        <div>       <TopNav /></div>
        <div className='flex  flex-row '>
          <div> <MainuContainer /></div>
          <div className='border border-pink-900  bg-gray-100 w-screen '> 

            {/* routes */}
            <Routes >
              <Route path="/" element={<Employeepage />} />
              <Route path="/holiday" element={<Holiday />} />
              <Route path="/designation" element={<Designation />} />
              {/* <Route path="/employee" element={<Employeepage />} /> */}
              <Route path="/attendanceadmin" element={<Attendanceadmin />} />
              <Route path="/attendanceemployee" element={<Attendanceemployee />} />
              <Route path="/adminleave" element={<Adminleave />} />
              <Route path="/leavetypes" element={<Leavetypes />} />
              <Route path="/empleave" element={<Empleave />} />
              <Route path="/shifts" element={<Shifts />} />
              
              <Route path="/verify-otp" element={<VerifyOTP />} />
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
       <Route path="/department" element={<Department />} />


              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} /> 

              <Route path="/addemployee" element={<AddEmployeePage />} />



            </Routes>
          </div>
        </div>
      </div>
      
      

    </>
  )
}

export default App
