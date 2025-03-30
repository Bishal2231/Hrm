import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUsers,
  FaBullseye,
  FaUserTie,
  FaExchangeAlt,
  FaUserClock,
  FaCalendarAlt,
  FaCalendarDay,
  FaFileInvoiceDollar
} from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const MainuContainer = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [leaveTypeList, SetleaveTypeList] = useState(false)
  const [AttendenceTypeList, setAttendenceTypeList]=useState(false)
  const openLeaveTypes = () => {
    SetleaveTypeList(!leaveTypeList)
    console.log("working")

  }
  const openAttendenceTypes = () => {
    setAttendenceTypeList(!AttendenceTypeList)
    console.log("working")

  }

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    if (leaveTypeList) {
      SetleaveTypeList(false)
    }
    if (AttendenceTypeList) { 
      setAttendenceTypeList(false)
    }
  };

  return (
    <div className={`h-screen bg-white transition-all duration-500 ease-in-out overflow-hidden relative   border
      ${isCollapsed ? "w-[5rem]" : "w-[14vw] pl-6 pr-6"}`}>

      {/* Hamburger Menu */}
      <button
        onClick={toggleSidebar}
        className="absolute top-[-3] right-0 p-2 mb-7 rounded-md hover:bg-gray-100 transition-colors"
      >
        <FiMenu className="text-gray-600 text-xl" />
      </button>

      <div className="mt-10">
        {/* {!isCollapsed && <h5 className="text-lg font-semibold">HRM</h5>} */}

        <div className="h-[50vh] mt-4 ml-2 flex flex-col gap-4">
          {/* Employees */}
          <div className="flex gap-2 items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer">
            <FaUsers className="text-gray-600" size="0.8rem" />
            {!isCollapsed && (
              <>
                <h6 className="text-sm"> <Link to='/'>Employees</Link>  </h6>
          
              </>
            )}
          </div>

          {/* Departments */}
          <div className="flex gap-2 items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer">
            <FaBullseye className="text-gray-600" size="0.8rem" />
            {!isCollapsed && <h6 className="text-sm">Departments</h6>}
          </div>

          {/* Designation */}
          <div className="flex gap-2 items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer">
            <FaUserTie className="text-gray-600" size="0.8rem" />
            {!isCollapsed && <h6 className="text-sm"> <Link to='/designation'> Designation </Link></h6>}
          </div>

          {/* Shifts */}
          <div className="flex gap-2 items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer">
            <FaExchangeAlt className="text-gray-600" size="0.8rem" />
            {!isCollapsed && <h6 className="text-sm"> <Link to="/shifts"> Shifts </Link> </h6>}
          </div>

          {/* Attendence */}
          <div className={`flex gap-2    p-2 hover:bg-gray-100 rounded-md cursor-pointer ${AttendenceTypeList ? `flex-col` : ``}`}>
            <div className="flex flex-row gap-2 ">

            <FaUserClock className="text-gray-600" size="0.8rem" />
              {!isCollapsed && <h6 className="text-sm" onClick={openAttendenceTypes}>  Attendence</h6>}
            </div>

            {AttendenceTypeList &&
              <div className="text-sm text-nowrap">
                <li > <Link to="/attendanceadmin"> Admin attendence</Link> </li>
                <li><Link to="/attendanceemployee"> Employee attendence</Link> </li>
                </div>
              }
          </div>

          {/* Leaves */}
          <div className={`flex gap-2   p-2 hover:bg-gray-100 rounded-md cursor-pointer ${leaveTypeList? `flex-col`: ``}`}>
            <div className="flex flex-row gap-2 ">
              <FaCalendarAlt className="text-gray-600" size="0.8rem" />
              {!isCollapsed && <h6 className="text-sm" onClick={openLeaveTypes}>  Leaves </h6>

              }</div>
          
            {leaveTypeList &&
              <div className="text-sm">
                <li > <Link to="/adminleave"> Admin Leave</Link> </li>
                <li><Link to="/empleave"> Employee Leave</Link> </li>
                <li> <Link to="/leavetypes">Leave Types </Link>  </li> </div> 
              }
          </div>

          {/* Holidays */}
          <div className="flex gap-2 items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer">
            <FaCalendarDay className="text-gray-600" size="0.8rem" />
            {!isCollapsed && <h6 className="text-sm"> <Link to="/holiday"> Holidays</Link></h6>}
          </div>

          {/* Payroll */}
          <div className="flex gap-2 items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer">
            <FaFileInvoiceDollar className="text-gray-600" size="0.8rem" />
            {!isCollapsed && <h6 className="text-sm">Payroll</h6>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainuContainer;