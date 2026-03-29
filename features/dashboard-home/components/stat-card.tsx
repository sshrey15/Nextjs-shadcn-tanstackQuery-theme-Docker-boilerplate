import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardAction,
  CardFooter,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ArrowDown,
  ArrowUp,
  
} from "lucide-react";
import { cn } from "@/lib/utils";
import { BsClipboard2Check } from "react-icons/bs";
import { FaIndianRupeeSign, FaRupeeSign, FaUserCheck } from "react-icons/fa6";
import { LiaMoneyBillSolid } from "react-icons/lia";

const stats = [
  {
    icon: <BsClipboard2Check size={20} />,
    title: "Appointments",
    value: 1,
   
  },
  {
    icon: <FaUserCheck size={20} />,
    title: "Check Ins",
    value: `23`,
  
  },
  {
    icon: <LiaMoneyBillSolid size={20   } />,
    title: "Billings",
    value: `₹  2000`,
  },
  {
    icon: <FaIndianRupeeSign size={20} />,
    title: "Revenue",
    value: `₹  2000/-`,
   
  },
];



export default function StatCard() {
  return (
    <div className="mx-auto  font-sans grid max-w-8xl grow grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <Card key={i} className="shadow-none dark:bg-[#151B23] ">
          <CardHeader className="p-4 pb-0">
            <CardTitle className="flex items-center gap-2 text-2xl font-medium text-muted-foreground">
              <div className="  flex items-center  text-[white] bg-[#0CC8A8] justify-center rounded-md  p-2">
                {stat.icon}
                </div>
              <span>{stat.title}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-2.5 space-y-2.5">
            <span className="text-foreground text-2xl font-bold tracking-tight">
              {stat.value}
            </span>
            
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
