import React, { useState } from "react";
// import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Settings, PlusCircle, Trash2, Edit, CheckSquare, ChevronDown, FileText, FileSpreadsheet, RefreshCw, ChevronUp } from "lucide-react";
// npx shadcn@latest add 
const holidays = [
  { type: "New Year", date: "01 Jan 2025", description: "First day of the new year", status: "Active" },
  { type: "Martin Luther King Jr. Day", date: "15 Jan 2025", description: "Celebrating the civil rights leader", status: "Active" },
  { type: "Presidents' Day", date: "19 Feb 2025", description: "Honoring past US Presidents", status: "Active" },
  { type: "Good Friday", date: "29 Mar 2025", description: "Holiday before Easter", status: "Active" },
  { type: "Easter Monday", date: "01 Apr 2025", description: "Holiday after Easter", status: "Active" },
  { type: "Memorial Day", date: "27 May 2025", description: "Honors military personnel", status: "Active" },
  { type: "Independence Day", date: "04 Jul 2025", description: "Celebrates Independence", status: "Active" },
];

const Holiday = () => {
  const [statusDropdown, setStatusDropdown] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("Status");

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-bold">Holiday</h2>
          <p className="text-gray-500 text-sm">Manage your holidays</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="p-2 hover:bg-gray-200" title="Export as PDF">
            <FileText className="w-5 h-5 text-red-500" />
          </Button>
          <Button variant="outline" className="p-2 hover:bg-gray-200" title="Export as Excel">
            <FileSpreadsheet className="w-5 h-5 text-green-500" />
          </Button>
          <Button variant="outline" className="p-2 hover:bg-gray-200" title="Refresh">
            <RefreshCw className="w-5 h-5 text-gray-500" />
          </Button>
          <Button variant="outline" className="p-2 hover:bg-gray-200" title="Collapse">
            <ChevronUp className="w-5 h-5 text-gray-500" />
          </Button>
          <Button className="bg-orange-500 text-white flex items-center">
            <PlusCircle className="w-4 h-4 mr-2" /> Add Holiday
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
        <div className="relative">
          <Button 
            className="ml-2 flex items-center bg-white border text-gray-500 hover:bg-gray-500 hover:text-white rounded-lg shadow-sm text-sm px-3 py-2"
            onClick={() => setStatusDropdown(!statusDropdown)}
          >
            {selectedStatus} <ChevronDown className="ml-2 w-4 h-4" />
          </Button>
          {statusDropdown && (
            <div className="absolute bg-white shadow-md rounded-lg mt-2 w-32">
              <p className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => { setSelectedStatus("Active"); setStatusDropdown(false); }}>Active</p>
              <p className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => { setSelectedStatus("Inactive"); setStatusDropdown(false); }}>Inactive</p>
            </div>
          )}
        </div>
      </div>

      {/* Holiday Table */}
      <div className="bg-white p-4 rounded-lg shadow">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th className="p-2"><CheckSquare className="w-4 h-4 text-gray-500" /></th>
              <th className="p-2">Type</th>
              <th className="p-2">Date</th>
              <th className="p-2">Description</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {holidays.map((holiday, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-2"><input type="checkbox" className="w-4 h-4" /></td>
                <td className="p-2">{holiday.type}</td>
                <td className="p-2">{holiday.date}</td>
                <td className="p-2">{holiday.description}</td>
                <td className="p-2">
                  <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-xs">
                    {holiday.status}
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

      {/* Settings Button */}
      <div className="fixed bottom-6 right-6 bg-orange-500 p-3 rounded-full shadow-lg cursor-pointer">
        <Settings className="text-white w-6 h-6" />
      </div>
    </div>
  );
};

export default Holiday;
