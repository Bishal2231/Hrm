import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, PlusCircle, Trash2, Edit, CheckSquare, ChevronDown, FileText, FileSpreadsheet, RefreshCw, ChevronUp, Settings } from "lucide-react";

const designations = [
  { name: "Sales Manager", department: "Sales", members: 7, createdOn: "24 Dec 2024", status: "Active" },
  { name: "Inventory Manager", department: "Inventory", members: 10, createdOn: "10 Dec 2024", status: "Active" },
  { name: "Accountant", department: "Finance", members: 5, createdOn: "27 Nov 2024", status: "Active" },
  { name: "System Administrator", department: "Admin", members: 10, createdOn: "18 Nov 2024", status: "Active" },
];

const Designation= () => {
  const [departmentDropdown, setDepartmentDropdown] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState("Department");

  const [statusDropdown, setStatusDropdown] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("Select Status");

  const [sortDropdown, setSortDropdown] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Sort By: Last 7 Days");

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-bold">Designation</h2>
          <p className="text-gray-500 text-sm">Manage your designation</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="p-2" title="Export as PDF">
            <FileText className="w-5 h-5 text-red-500" />
          </Button>
          <Button variant="outline" className="p-2" title="Export as Excel">
            <FileSpreadsheet className="w-5 h-5 text-green-500" />
          </Button>
          <Button variant="outline" className="p-2" title="Refresh">
            <RefreshCw className="w-5 h-5 text-gray-500" />
          </Button>
          <Button variant="outline" className="p-2" title="Collapse">
            <ChevronUp className="w-5 h-5 text-gray-500" />
          </Button>
          <Button className="bg-orange-500 text-white flex items-center">
            <PlusCircle className="w-4 h-4 mr-2" /> Add Designation
          </Button>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="flex justify-between items-center mb-6 bg-white p-3 rounded-lg shadow-sm">
        <div className="relative flex items-center w-1/3">
          <Search className="absolute left-3 text-gray-500 w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 pl-10 border rounded-lg shadow-sm text-sm"
          />
        </div>

        {/* Department Dropdown */}
        <div className="relative">
          <Button 
            className="ml-2 flex items-center bg-white border text-gray-500 rounded-lg shadow-sm text-sm px-3 py-2"
            onClick={() => setDepartmentDropdown(!departmentDropdown)}
          >
            {selectedDepartment} <ChevronDown className="ml-2 w-4 h-4" />
          </Button>
          {departmentDropdown && (
            <div className="absolute bg-white shadow-md rounded-lg mt-2 w-32">
              {["Sales", "Inventory", "Finance"].map((dept) => (
                <p
                  key={dept}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => { setSelectedDepartment(dept); setDepartmentDropdown(false); }}
                >
                  {dept}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Status Dropdown */}
        <div className="relative">
          <Button 
            className="ml-2 flex items-center bg-white border text-gray-500 rounded-lg shadow-sm text-sm px-3 py-2"
            onClick={() => setStatusDropdown(!statusDropdown)}
          >
            {selectedStatus} <ChevronDown className="ml-2 w-4 h-4" />
          </Button>
          {statusDropdown && (
            <div className="absolute bg-white shadow-md rounded-lg mt-2 w-32">
              {["Active", "Inactive"].map((status) => (
                <p
                  key={status}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => { setSelectedStatus(status); setStatusDropdown(false); }}
                >
                  {status}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Sort By Dropdown */}
        <div className="relative">
          <Button 
            className="ml-2 flex items-center bg-white border text-gray-500 rounded-lg shadow-sm text-sm px-3 py-2"
            onClick={() => setSortDropdown(!sortDropdown)}
          >
            {selectedSort} <ChevronDown className="ml-2 w-4 h-4" />
          </Button>
          {sortDropdown && (
            <div className="absolute bg-white shadow-md rounded-lg mt-2 w-40">
              {["Recently Added", "Ascending", "Descending", "Last 7 Days", "Last Month"].map((sort) => (
                <p
                  key={sort}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => { setSelectedSort(sort); setSortDropdown(false); }}
                >
                  {sort}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Designation Table */}
      <div className="bg-white p-4 rounded-lg shadow">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th className="p-2"><CheckSquare className="w-4 h-4 text-gray-500" /></th>
              <th className="p-2">Designation</th>
              <th className="p-2">Department</th>
              <th className="p-2">Members</th>
              <th className="p-2">Created On</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {designations.map((designation, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-2"><input type="checkbox" className="w-4 h-4" /></td>
                <td className="p-2">{designation.name}</td>
                <td className="p-2">{designation.department}</td>
                <td className="p-2">{designation.members}</td>
                <td className="p-2">{designation.createdOn}</td>
                <td className="p-2">
                  <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-xs">
                    {designation.status}
                  </span>
                </td>
                <td className="p-2 flex space-x-2">
                  <Button variant="outline" size="icon">
                    <Edit className="w-4 h-4 text-gray-500" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Designation;
