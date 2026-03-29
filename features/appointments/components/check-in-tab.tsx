"use client"
import EmptyComponent from "@/components/empty3";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export interface CheckInTabProps {
    sr_no: number;
    date: string;
    patient: string;
    gender: string;
    age: number;
    doctor: string;
    status: "Pending" | "Check In" | "In process" | "Completed" | "Cancelled";
    edit: () => void;
    delete: () => void;
}

const checkInData: CheckInTabProps[] = [
    // {
    //     sr_no: 1,
    //     date: "2024-06-01T10:00:00Z",
    //     patient: "John Doe",
    //     gender: "Male",
    //     age: 30,
    //     doctor: "Dr. Smith",
    //     status: "Check In",
    //     edit: () => {},
    //     delete: () => {}
    // }
];

export default function CheckInTab() {
    const totalColumns = 8;
    return (
        <Card className="w-full max-w-8xl mx-auto shadow-none border-none dark:bg-[#151B23]">
            <CardHeader className="space-y-4 p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <CardTitle className="text-2xl font-semibold dark:text-white text-gray-700 whitespace-nowrap">
                        Check In
                    </CardTitle>
                </div>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Sr No</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Patient</TableHead>
                            <TableHead>Gender</TableHead>
                            <TableHead>Age</TableHead>
                            <TableHead>Doctor</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            checkInData.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={totalColumns} className="h-72 text-center">
                                        <div className="flex flex-col    items-center justify-center gap-2">
                                            <EmptyComponent />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ) : (
                                checkInData.map((row) => (
                                    <TableRow key={row.sr_no} className="border-b hover:bg-gray-50/50">
                                        <TableCell>{row.sr_no}</TableCell>
                                        <TableCell>{new Date(row.date).toLocaleString()}</TableCell>
                                        <TableCell>{row.patient}</TableCell>
                                        <TableCell>{row.gender}</TableCell>
                                        <TableCell>{row.age}</TableCell>
                                        <TableCell>{row.doctor}</TableCell>
                                        <TableCell>{row.status}</TableCell>
                                        <TableCell>
                                            <button onClick={row.edit} className="text-blue-500 hover:text-blue-700">
                                                Edit
                                            </button>
                                            <button onClick={row.delete} className="text-red-500 hover:text-red-700 ml-2">
                                                Delete
                                            </button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )
                        }



                    </TableBody>

                </Table>
            </CardContent>
        </Card>
    )
}