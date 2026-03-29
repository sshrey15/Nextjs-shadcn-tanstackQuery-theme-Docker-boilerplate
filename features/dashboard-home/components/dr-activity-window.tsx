"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EmptyComponent from "@/components/empty3";


export interface DoctorActivity {
    id: number;
    name: string;
    total: number;
    pending: number;
    checkIn: number;
    inProcess: number;
    completed: number;
}

const doctorData: DoctorActivity[] = []

export default function DrActivityWindow() {
  return (
    <Card className="w-full max-w-8xl mx-auto shadow-none border-none  dark:bg-[#151B23]">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold dark:text-white text-gray-700">Doctors Activity Window </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader >
            <TableRow >
              <TableHead >No.</TableHead>
              <TableHead >Doctor Name</TableHead>
              <TableHead >Total Appointment</TableHead>
              <TableHead >Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>{
                doctorData.length === 0 && (
                  <TableRow>
                                 <TableCell colSpan={7} className="h-72 text-center">
                                   <div className="flex flex-col items-center justify-center gap-2">
                                     <EmptyComponent />
                                   </div>
                                 </TableCell>
                               </TableRow>
                )
              }
              {doctorData.map((row) => (
                <TableRow key={row.id} className="border-b hover:bg-gray-50/50">
                  <TableCell className="py-6 text-lg">{row.id}</TableCell>
                  <TableCell className="text-lg">{row.name}</TableCell>
                <TableCell className="text-lg">{row.total}</TableCell>
                <TableCell>
                  
                  <div className="grid grid-cols-2 gap-2 w-[320px]">
                    <div className="flex justify-between items-center px-3 py-1.5 border border-[#5CCF94] rounded text-sm text-gray-700">
                      <span>Pending: {row.pending}</span>
                    </div>
                    <div className="flex justify-between items-center px-3 py-1.5 bg-[#5CCF94] rounded text-sm text-white">
                      <span>Check In: {row.checkIn}</span>
                    </div>
                    <div className="flex justify-between items-center px-3 py-1.5 border border-[#5CCF94] rounded text-sm text-gray-700">
                      <span>In process: {row.inProcess}</span>
                    </div>
                    <div className="flex justify-between items-center px-3 py-1.5 bg-[#5CCF94] rounded text-sm text-white">
                      <span>Completed: {row.completed}</span>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}