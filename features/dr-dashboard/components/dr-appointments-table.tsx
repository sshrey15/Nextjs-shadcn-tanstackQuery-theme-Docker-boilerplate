import EmptyComponent from "@/components/empty3";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SearchIcon, SlidersHorizontal } from "lucide-react";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";


export interface DrAppointmentsTableProps{
    sr_no: number
    date: string
    patient: string
    phone: number
    gender: string
    age: number
    chief_complaint: string
    token: number
    doctor: string
    status: "Pending" | "Check In" | "In process" | "Completed" | "Cancelled";
    action: () => void
}

const data: DrAppointmentsTableProps[] = [
    {
        sr_no: 1,
        date: "2026-03-27",
        patient: "John Doe",
        phone: 9876543210,
        gender: "Male",
        age: 45,
        chief_complaint: "Persistent back pain",
        token: 101,
        doctor: "Dr. Smith",
        status: "Completed",
        action: () => console.log("Viewing John Doe")
    },
    {
        sr_no: 2,
        date: "2026-03-27",
        patient: "Sarah Jenkins",
        phone: 9123456789,
        gender: "Female",
        age: 29,
        chief_complaint: "Migraine and nausea",
        token: 102,
        doctor: "Dr. Adams",
        status: "In process",
        action: () => console.log("Viewing Sarah Jenkins")
    },
    {
        sr_no: 3,
        date: "2026-03-27",
        patient: "Robert Chen",
        phone: 9988776655,
        gender: "Male",
        age: 62,
        chief_complaint: "Routine checkup",
        token: 103,
        doctor: "Dr. Smith",
        status: "Check In",
        action: () => console.log("Viewing Robert Chen")
    },
    {
        sr_no: 4,
        date: "2026-03-28",
        patient: "Emily White",
        phone: 9445566778,
        gender: "Female",
        age: 12,
        chief_complaint: "Seasonal allergies",
        token: 104,
        doctor: "Dr. Taylor",
        status: "Pending",
        action: () => console.log("Viewing Emily White")
    },
    {
        sr_no: 5,
        date: "2026-03-28",
        patient: "Michael Scott",
        phone: 9001122334,
        gender: "Male",
        age: 40,
        chief_complaint: "Burn on foot",
        token: 105,
        doctor: "Dr. Adams",
        status: "Cancelled",
        action: () => console.log("Viewing Michael Scott")
    }
];
export default function DrAppointmentsTable(){
    const totalColumns = 11
    return(
        <Card className="w-full max-w-8xl mx-auto shadow-none border-none dark:bg-[#151B23]">
        <CardHeader className="space-y-4 p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <CardTitle className="text-2xl font-semibold dark:text-white text-gray-700 whitespace-nowrap">
                   Appointments
                </CardTitle>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <SearchBar/>
                    <FilterDropdown/>
           
                </div>  
            </div>
        </CardHeader>
        <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Sr No</TableHead>
                            <TableHead>Date & Time</TableHead>
                            <TableHead>Patient</TableHead>
                            <TableHead>Phone</TableHead>
                            <TableHead>Gender</TableHead>
                            <TableHead>Age</TableHead>
                            <TableHead>Chief Complaint</TableHead>
                            <TableHead>Token</TableHead>
                            <TableHead>Doctor</TableHead>
    
                            <TableHead>Status</TableHead>
                            <TableHead>Consultaiton</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            data.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={totalColumns} className="h-72 text-center">
                                        <div className="flex flex-col items-center justify-center gap-2">
                                            <EmptyComponent />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ) :(
                                data.map((row) => (
                                    <TableRow key={row.sr_no} className="border-b hover:bg-gray-50/50">
                                        <TableCell>{row.sr_no}</TableCell>
                                        <TableCell>{new Date(row.date).toLocaleString()}</TableCell>
                                        <TableCell>{row.patient}</TableCell>
                                        <TableCell>{row.phone}</TableCell>
                                        <TableCell>{row.gender}</TableCell>
                                        <TableCell>{row.age}</TableCell>
                                        <TableCell>{row.chief_complaint}</TableCell>
                                        <TableCell>{row.token}</TableCell>
                                        <TableCell>{row.doctor}</TableCell>
                                  
                                        
                                        <TableCell>
                                            <Badge
                                                className={`
                          ${row.status === "Pending" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" : ""}
                          ${row.status === "Check In" ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" : ""}
                          ${row.status === "In process" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" : ""}
                          ${row.status === "Completed" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : ""}
                     
                        `}
                                                variant="default"
                                            >
                                                {row.status}
                                            </Badge>
                                        </TableCell>

                                        <TableCell>
                                        <Button variant="outline">
                                                        Start
                                        </Button>
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


function FilterDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">
                    <SlidersHorizontal />
                    Filter
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-40">
                <DropdownMenuLabel>Filter Appointments</DropdownMenuLabel>
                <DropdownMenuItem>Today</DropdownMenuItem>
                <DropdownMenuItem>This Week</DropdownMenuItem>
                <DropdownMenuItem>This Month</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Pending</DropdownMenuItem>
                <DropdownMenuItem>Check In</DropdownMenuItem>
                <DropdownMenuItem>In process</DropdownMenuItem>
                <DropdownMenuItem>Completed</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

function SearchBar() {
    return (
        <ButtonGroup>
            <Input placeholder="Search..." />
            <Button variant="outline" aria-label="Search">
                <SearchIcon />
            </Button>
        </ButtonGroup>
    );
}
