
import StatCard from "../dashboard-home/components/stat-card";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import DrAppointmentsTable from "./components/dr-appointments-table";

export default function DrDashboardPage() {
  return (
    <>
    <div className="  font-sans  p-2 ">
      <div className="flex justify-between"> 
      <h1 className="text-2xl mb-6 font-bold">👋🏻 Hi, Dr. Shrey Singh</h1>
      <DrSelectButton/>
      </div>

        <StatCard />
    </div>
    <div className="font-sans p-2">
        <DrAppointmentsTable/>
    </div>


        
    </>
  );
}


function DrSelectButton() {
  return (
    <Select defaultValue="shrey-singh"> 
      <SelectTrigger className="w-full max-w-48">
        <SelectValue placeholder="Select a doctor" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Doctors</SelectLabel>
 
          <SelectItem value="shrey-singh">Shrey Singh</SelectItem>
          <SelectItem value="banana">Dr. Banana</SelectItem>
          <SelectItem value="blueberry">Dr. Blueberry</SelectItem>
          <SelectItem value="grapes">Dr. Grapes</SelectItem>
          <SelectItem value="pineapple">Dr. Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}