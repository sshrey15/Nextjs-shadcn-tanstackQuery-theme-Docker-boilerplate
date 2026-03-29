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


export interface Transactions {
    id: number;
    name: string;
    date: string;
    payment_method: string;
    amount: number;
}

const transactions: Transactions[] = [
    
]

export default function LatestTransactions() {
  return (
    <Card className="w-full max-w-8xl mx-auto shadow-none border-none dark:bg-[#151B23]">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-gray-700">Latest Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader >
            <TableRow >
              <TableHead >ID.</TableHead>
              <TableHead >Dr. Name</TableHead>
              <TableHead >Date</TableHead>
              <TableHead >Payment Method</TableHead>
              <TableHead >Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>{
                transactions.length === 0 && (
                  <TableRow>
                                 <TableCell colSpan={7} className="h-72 text-center">
                                   <div className="flex flex-col items-center justify-center gap-2">
                                     <EmptyComponent />
                                   </div>
                                 </TableCell>
                               </TableRow>
                )
              }
              {transactions.map((row) => (
                <TableRow key={row.id} className="border-b hover:bg-gray-50/50">
                  <TableCell >{row.id}</TableCell>
                  <TableCell >{row.name}</TableCell>
                <TableCell >{row.date}</TableCell>
                <TableCell >{row.payment_method}</TableCell>
                <TableCell >{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}