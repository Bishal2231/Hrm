import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Settings, Users, UserCheck, UserX, UserPlus, MoreVertical } from "lucide-react";
import Nav from "../../components/essentials/Nav";

const employees = [
    {
        id: "POS001",
        name: "Anthony Lewis",
        role: "System Admin",
        department: "HR",
        joined: "30 May 2023",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        id: "POS002",
        name: "Brian Villalobos",
        role: "Software Developer",
        department: "UI/UX",
        joined: "30 May 2023",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
        id: "POS003",
        name: "Harvey Smith",
        role: "System Admin",
        department: "Admin",
        joined: "30 May 2023",
        image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
];

const Home = () => {
    const [nav,setNav] = useState(true)
    return (
        <div className="p-6 bg-gray-100 min-h-screen flex flex-row gap-4">
          <div>
          {/* <div style={{ height: '1rem', width: '100vw', backgroundColor: 'pink' }}></div> */}
          
          { nav ? <Nav /> : null }
          

           
            </div>  
            <div style={{marginTop:'7rem',width:"80%",  transition: 'all 0.5s ease-in-out'}}>
                {/* Stats Section */}
                <div className="grid grid-cols-4 gap-4 ">
                    <Card className="bg-purple-600 text-white p-3 flex-row items-center justify-between">
                        <div>
                            <h3 className="text-sm font-semibold">Total Employee</h3>
                            <p className="text-xl">1007</p>
                        </div>
                        <Users className="text-white w-5 h-5" />
                    </Card>
                    <Card className="bg-green-600 text-white p-3 flex items-center flex-row justify-between">
                        <div>
                            <h3 className="text-sm font-semibold">Active</h3>
                            <p className="text-xl">1007</p>
                        </div>
                        <UserCheck className="text-white w-5 h-5" />
                    </Card>
                    <Card className="bg-blue-900 text-white p-3 flex items-center flex-row justify-between">
                        <div>
                            <h3 className="text-sm font-semibold">Inactive</h3>
                            <p className="text-xl">1007</p>
                        </div>
                        <UserX className="text-white w-5 h-5" />
                    </Card>
                    <Card className="bg-blue-600 text-white p-3 flex items-center flex-row justify-between">
                        <div>
                            <h3 className="text-sm font-semibold">New Joiners</h3>
                            <p className="text-xl">67</p>
                        </div>
                        <UserPlus className="text-white w-5 h-5" />
                    </Card>
                </div>

                {/* Search and Filters */}
                <div className="flex justify-between items-center mb-6">
                    <div className="relative w-1/3">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full p-2 border rounded-lg shadow-sm text-sm"
                        />
                        <Search className="absolute right-3 top-2 text-gray-500 w-4 h-4" />
                    </div>
                    <div className="space-x-4 text-sm">
                        <Button variant="outline">Select Employees</Button>
                        <Button variant="outline">Designation</Button>
                    </div>
                </div>

                {/* Employee Cards */}
                <div className="grid grid-cols-3 gap-4">
                    {employees.map((emp) => (
                        <Card key={emp.id} className="p-3 bg-white shadow rounded-lg text-sm">
                            <CardContent className="flex flex-col items-center">
                                <img
                                    src={emp.image}
                                    alt={emp.name}
                                    className="w-12 h-12 rounded-full mb-2"
                                />
                                <p className="text-orange-600 font-semibold text-xs">EMP ID: {emp.id}</p>
                                <h4 className="text-sm font-bold">{emp.name}</h4>
                                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg text-xs mt-1">
                                    {emp.role}
                                </span>
                                <div className="mt-2 w-full flex justify-between text-gray-600 text-xs">
                                    <p>Joined: {emp.joined}</p>
                                    <p>Dept: {emp.department}</p>
                                </div>
                            </CardContent>
                            <MoreVertical className="absolute top-3 right-3 text-gray-500 w-4 h-4 cursor-pointer" />
                        </Card>
                    ))}
                </div>

                {/* Settings Button */}
                <div className="fixed bottom-6 right-6 bg-orange-500 p-3 rounded-full shadow-lg cursor-pointer">
                    <Settings className="text-white w-6 h-6" />
                </div>
            </div>
        </div>
    );
};

export default Home;