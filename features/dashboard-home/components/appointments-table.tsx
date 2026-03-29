"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import EmptyComponent from "@/components/empty3";

export interface Payment {
  id: string;
  patient: {
    name: string;
    avatar: string;
  };
  time: string;
  age: number;
  gender: "Male" | "Female" | "Other";
  status: "Completed" | "Pending" | "Failed";
  Doctor: string;
}

const payments: Payment[] = [
    {
        id: "APT-001",
        patient: {
            name: "John Doe",
            avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        },
        time: "2024-06-01T10:00:00Z",
        age: 30,
        gender: "Male",
        status: "Pending",
        Doctor: "Dr. Jane Smith"
    },{
        id: "APT-002",
        patient: {
            name: "Jane Doe",
            avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        },
        time: "2024-06-01T11:00:00Z",
        age: 25,
        gender: "Female",
        status: "Completed",
        Doctor: "Dr. John Doe"  
    }
];

export default function TableComponent() {
  const getStatusVariant = (status: Payment["status"]) => {
    switch (status) {
      case "Completed":
        return "default";
      case "Pending":
        return "secondary";
      case "Failed":
        return "destructive";
      default:
        return "outline";
    }
  };

  const formatTime = (timeString: string) => {
    const date = new Date(timeString);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <Card className="w-full border-none max-w-8xl mx-auto shadow-none dark:bg-[#151B23]">
      <CardHeader>
        <CardTitle className="text-2xl">Appointments</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Patient</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Doctor</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.length > 0 ? (
              payments.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell className="font-mono text-sm">
                    {payment.id}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage
                          src={payment.patient.avatar}
                          alt={payment.patient.name}
                        />
                        <AvatarFallback>
                          {payment.patient.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span>{payment.patient.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{formatTime(payment.time)}</TableCell>
                  <TableCell className="font-medium">{payment.age}</TableCell>
                  <TableCell>{payment.gender}</TableCell>
                  <TableCell>{payment.Doctor}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(payment.status)}>
                      {payment.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="h-72 text-center">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <EmptyComponent />
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
