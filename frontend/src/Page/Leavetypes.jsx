import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Edit, Trash2 } from "lucide-react";

export  function Leavetypes() {
  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-xl font-bold">Leave Type</h1>
          <p className="text-gray-500">Manage your Leaves</p>
        </div>
        <Button className="bg-orange-500 text-white">Add Leave Type</Button>
      </div>

      {/* Leave Types Table */}
      <Card>
        <CardContent className="p-4">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 text-left">
                  <Checkbox />
                </th>
                <th className="p-2 text-left">Leave Type</th>
                <th className="p-2 text-left">Leave Quota</th>
                <th className="p-2 text-left">Created On</th>
                <th className="p-2 text-left">Status</th>
                <th className="p-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: "Sick Leave", quota: 5, date: "02 Aug 2023" },
                { type: "Maternity", quota: 5, date: "03 Aug 2023" },
                { type: "Paternity", quota: 5, date: "04 Aug 2023" },
                { type: "Casual Leave", quota: 5, date: "07 Aug 2023" },
                { type: "Emergency", quota: 5, date: "08 Aug 2023" },
                { type: "Vacation", quota: 5, date: "10 Aug 2023" },
              ].map((leave, index) => (
                <tr key={index} className="border-t">
                  <td className="p-2">
                    <Checkbox />
                  </td>
                  <td className="p-2">{leave.type}</td>
                  <td className="p-2">{leave.quota}</td>
                  <td className="p-2">{leave.date}</td>
                  <td className="p-2">
                    <span className="bg-green-200 text-green-800 px-2 py-1 rounded">Active</span>
                  </td>
                  <td className="p-2 flex gap-2">
                    <Button variant="outline" size="icon">
                      <Edit size={16} />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Trash2 size={16} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
