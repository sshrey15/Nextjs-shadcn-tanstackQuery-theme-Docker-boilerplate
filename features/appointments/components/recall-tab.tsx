"use client"
import EmptyComponent from "@/components/empty3";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlusIcon, PrinterIcon, SearchIcon, SlidersHorizontal } from "lucide-react";
import { Switch } from "@/components/ui/switch"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
import { Label } from "@/components/ui/label"
import { FaWhatsapp } from "react-icons/fa";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";

export interface RecallTabProps {
    sr_no: number;
    date: string
    patient: string
    phone: number
    gender: string
    purpose: string
    notify: boolean
    age: number
    doctor: string
    status: "Pending" | "Check In" | "In process" | "Completed" | "Cancelled";
    edit: () => void
    delete: () => void


}

const recallData: RecallTabProps[] = [
    {
        sr_no: 1,
        date: "2024-06-01T10:00:00Z",
        patient: "shrey",
        phone: 1234567890,
        gender: "male",
        purpose: "new",
        notify: true,
        age: 23,
        doctor: "bhavi",
        status: "Pending",
        edit: () => { },
        delete: () => { }
    },
    {
        sr_no: 2,
        date: "2024-06-01T10:00:00Z",
        patient: "shrey",
        phone: 1234567890,
        gender: "male",
        purpose: "new",
        notify: true,
        age: 23,
        doctor: "bhavi",
        status: "Pending",
        edit: () => { },
        delete: () => { }
    },
    {
        sr_no: 3,
        date: "2024-06-01T10:00:00Z",
        patient: "shrey",
        phone: 1234567890,
        gender: "male",
        purpose: "new",
        notify: false,
        age: 23,
        doctor: "bhavi",
        status: "Pending",
        edit: () => { },
        delete: () => { }
    }
]

export default function RecallTab() {
    const totalColumns = 8;
    return (
        <Card className="w-full max-w-8xl mx-auto shadow-none border-none dark:bg-[#151B23]">
            <CardHeader className="space-y-4 p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <CardTitle className="text-2xl font-semibold dark:text-white text-gray-700 whitespace-nowrap">
                        Check In
                    </CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <SearchBar />
                        <ExportButton />
                        <FilterDropdown />
                        <NewRecallButton />
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
                                <TableHead>Doctor</TableHead>
                                <TableHead>Purpose</TableHead>
                                <TableHead>Notify</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                    <TableBody>
                        {
                            recallData.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={totalColumns} className="h-72 text-center">
                                        <div className="flex flex-col items-center justify-center gap-2">
                                            <EmptyComponent />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ) : (
                                recallData.map((row) => (
                                    <TableRow key={row.sr_no} className="border-b hover:bg-gray-50/50">
                                        <TableCell>{row.sr_no}</TableCell>
                                        <TableCell>{new Date(row.date).toLocaleString()}</TableCell>
                                        <TableCell>{row.patient}</TableCell>
                                        <TableCell>{row.phone}</TableCell>
                                        <TableCell>{row.gender}</TableCell>
                                        <TableCell>{row.age}</TableCell>
                                        <TableCell>{row.doctor}</TableCell>
                                        <TableCell>{row.purpose}</TableCell>
                                        <TableCell className="flex items-center gap-2">
                                            <Switch
                                                id={`notify-${row.sr_no}`}
                                                defaultChecked={row.notify}
                                            />
                                            <Label htmlFor={`notify-${row.sr_no}`}>
                                                <FaWhatsapp
                                                    size={20}
                                                    className={row.notify ? "text-[#25D366]" : "text-gray-400"}
                                                />
                                            </Label>
                                        </TableCell>
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

function NewRecallButton() {
    return (
        <Drawer direction="right">
            <DrawerTrigger asChild>
                <Button variant="outline">
                    <PlusIcon />
                    Schedule New Recall
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
