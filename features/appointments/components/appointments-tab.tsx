"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SlidersHorizontal } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EmptyComponent from "@/components/empty3";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";
import { PlusIcon, PrinterIcon, SearchIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


export interface Appointment {
  sr_no: number;
  token: number;
  date_time: string;
  patient: string;
  phone: number;
  gender: string;
  age: number;
  dr_name: string;
  duration: string;
  status: "Pending" | "Check In" | "In process" | "Completed";
}

const appointmentsData: Appointment[] = [
  {
    sr_no: 1,
    token: 101,
    date_time: "2024-06-01T10:00:00Z",
    patient: "John Doe",
    phone: 1234567890,
    gender: "Male",
    age: 30,
    dr_name: "Dr. Smith",
    duration: "30 minutes",
    status: "Pending",
  },
  {
    sr_no: 1,
    token: 1031,
    date_time: "2024-06-01T10:00:00Z",
    patient: "John Doe",
    phone: 1234567890,
    gender: "Male",
    age: 30,
    dr_name: "Dr. Smith",
    duration: "30 minutes",
    status: "Completed",
  },
];

export default function AppointmentsTab() {
  const totalColumns = 11;

  return (
    <Card className="w-full max-w-8xl mx-auto shadow-none border-none dark:bg-[#151B23]">
      <CardHeader className="space-y-4 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <CardTitle className="text-2xl font-semibold dark:text-white text-gray-700 whitespace-nowrap">
            Appointments
          </CardTitle>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <SearchBar />
            <ExportButton />
            <FilterDropdown />
            <NewAppointmentButton />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Sr. No.</TableHead>
              <TableHead>Date & Time</TableHead>
              <TableHead>Token No.</TableHead>
              <TableHead>Patient Name</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Doctor Name</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {appointmentsData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={totalColumns} className="h-72 text-center">
                  <div className="flex flex-col  items-center justify-center gap-2">
                    <EmptyComponent />
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              appointmentsData.map((row) => (
                <TableRow key={row.token}>
                  <TableCell>{row.sr_no}</TableCell>
                  <TableCell>
                    {new Date(row.date_time).toLocaleString()}
                  </TableCell>
                  <TableCell>{row.token}</TableCell>
                  <TableCell>{row.patient}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell>{row.gender}</TableCell>
                  <TableCell>{row.age}</TableCell>
                  <TableCell>{row.dr_name}</TableCell>
                  <TableCell>{row.duration}</TableCell>
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
                    <button className="px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded transition-colors">
                      Edit
                    </button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

function ExportButton() {
  return (
    <Button variant="outline">
      <PrinterIcon aria-hidden="true" className="-ms-1 opacity-60" size={16} />
      Export
    </Button>
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

function NewAppointmentButton() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline">
          <PlusIcon />
          New Appointment
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Move Goal</DrawerTitle>
          <DrawerDescription>Set your daily activity goal.</DrawerDescription>
        </DrawerHeader>
        <div className="no-scrollbar overflow-y-auto px-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <p
              key={index}
              className="mb-4 leading-normal style-lyra:mb-2 style-lyra:leading-relaxed"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          ))}
        </div>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
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
