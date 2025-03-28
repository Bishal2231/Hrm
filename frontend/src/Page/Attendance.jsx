import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Calendar, Settings, FileText, FileSpreadsheet, Search } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const employees = [
  { name: "Carl Evans", role: "Designer", status: "Present", img: "/avatars/carl.jpg", clockIn: "09:00 AM", clockOut: "07:15 PM", production: "09h 00m", break: "0h 45m", overtime: "0h 20m", total: "09h 20m" },
  { name: "Daniel Jude", role: "Administrator", status: "Absent", img: "/avatars/daniel.jpg" },
  { name: "Emma Bates", role: "HR Assistant", status: "Present", img: "/avatars/emma.jpg", clockIn: "09:42 AM", clockOut: "07:20 PM", production: "09h 17m", break: "01h 00m", overtime: "00h 17m", total: "09h 17m" },
  { name: "Mark Joslyn", role: "Designer", status: "Absent", img: "/avatars/mark.jpg" },
  { name: "Marsha Betts", role: "Developer", status: "Present", img: "/avatars/marsha.jpg", clockIn: "09:17 AM", clockOut: "07:34 PM", production: "09h 26m", break: "01h 20m", overtime: "00h 26m", total: "09h 26m" },
  { name: "Michelle Robison", role: "HR Manager", status: "Present", img: "/avatars/michelle.jpg", clockIn: "09:30 AM", clockOut: "08:10 PM", production: "09h 00m", break: "00h 34m", overtime: "00h 20m", total: "09h 20m" },
];

export default function Attendance() {
  const [search, setSearch] = useState("");
  
  return (
    <Card className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-semibold">Attendance</h2>
          <p className="text-gray-500 text-sm">Manage your Attendance</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline"><FileText className="w-5 h-5" /></Button>
          <Button variant="outline"><FileSpreadsheet className="w-5 h-5" /></Button>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="relative w-64">
          <Search className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
          <Input
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline"><Calendar className="w-5 h-5" /> Select Date</Button>
          <Button variant="outline">Select Status</Button>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Employee</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Clock In</TableHead>
            <TableHead>Clock Out</TableHead>
            <TableHead>Production</TableHead>
            <TableHead>Break</TableHead>
            <TableHead>Overtime</TableHead>
            <TableHead>Total Hours</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.filter(emp => emp.name.toLowerCase().includes(search.toLowerCase())).map((emp, index) => (
            <TableRow key={index}>
              <TableCell className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={emp.img} alt={emp.name} />
                </Avatar>
                <div>
                  <p className="font-medium">{emp.name}</p>
                  <p className="text-gray-500 text-sm">{emp.role}</p>
                </div>
              </TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded text-white ${emp.status === "Present" ? "bg-green-500" : "bg-red-500"}`}>
                  {emp.status}
                </span>
              </TableCell>
              <TableCell>{emp.clockIn || "-"}</TableCell>
              <TableCell>{emp.clockOut || "-"}</TableCell>
              <TableCell>{emp.production || "-"}</TableCell>
              <TableCell>{emp.break || "-"}</TableCell>
              <TableCell>{emp.overtime || "-"}</TableCell>
              <TableCell>{emp.total || "-"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="fixed bottom-6 right-6 bg-orange-500 p-3 rounded-full cursor-pointer shadow-lg">
        <Settings className="w-6 h-6 text-white" />
      </div>
    </Card>
  );
}
