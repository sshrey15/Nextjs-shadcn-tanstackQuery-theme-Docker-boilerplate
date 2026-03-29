"use client";

import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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

export interface PatientTableProps {
  sr_no: number;
  Date: string;
  Time: string;
  patient_name: string;
  phone: number;
  patient_id: string;
  gender: string;
  age: string;
  visit: () => void;
  payment_due: number;
  edit: () => void;
  delete: () => void;
}

const data: PatientTableProps[] = [
  {
    sr_no: 1,
    Date: "2026-03-28",
    Time: "10:00",
    patient_name: "Jane Doe",
    phone: 5551234567,
    patient_id: "P-1001",
    gender: "F",
    age: "34",
    visit: () => {},
    payment_due: 0,
    edit: () => {},
    delete: () => {},
  },
  {
    sr_no: 2,
    Date: "2026-03-28",
    Time: "11:30",
    patient_name: "John Smith",
    phone: 5559876543,
    patient_id: "P-1002",
    gender: "M",
    age: "42",
    visit: () => {},
    payment_due: 120,
    edit: () => {},
    delete: () => {},
  },
];

export default function PatientsTable() {
  const router = useRouter();

  return (
             <Card className="w-full max-w-8xl mx-auto shadow-none border-none dark:bg-[#151B23]">
                 <CardHeader className="space-y-4 p-6">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                  <SearchBar/>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        
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
                    <TableHead>Patient Id</TableHead>
                    <TableHead>Gender</TableHead>
                    <TableHead>Age</TableHead>
                    <TableHead>Visit</TableHead>
                    <TableHead>Payment Due</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.map((row) => (
                    <TableRow
                      key={row.patient_id}
                      className="cursor-pointer hover:bg-muted/50"
                      onClick={() =>
                        router.push(
                          `/dashboard/patients/${encodeURIComponent(row.patient_id)}`,
                        )
                      }
                    >
                      <TableCell>{row.sr_no}</TableCell>
                      <TableCell>
                        {row.Date} {row.Time}
                      </TableCell>
                      <TableCell className="font-medium">{row.patient_name}</TableCell>
                      <TableCell>{row.phone}</TableCell>
                      <TableCell>{row.patient_id}</TableCell>
                      <TableCell>{row.gender}</TableCell>
                      <TableCell>{row.age}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">View</Badge>
                      </TableCell>
                      <TableCell>${row.payment_due}</TableCell>
                      <TableCell
                        className="text-primary"
                        onClick={(e) => e.stopPropagation()}
                      >
                        ···
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
             </Card>
    )
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