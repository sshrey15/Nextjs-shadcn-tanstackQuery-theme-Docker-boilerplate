
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import AppointmentsTab from "./appointments-tab";
import CheckInTab from "./check-in-tab";
import RecallTab from "./recall-tab";
import CalenderTab from "./calender-tab";

export function AppointmentTabs() {
  return (
    <Tabs defaultValue="appointments" className="max-w-8xl ">
      <TabsList className="bg-[#E6FAF6]"  >
        <TabsTrigger value="appointments">Appointments</TabsTrigger>
        <TabsTrigger value="analytics">Check In</TabsTrigger>
        <TabsTrigger value="reports">Recalls</TabsTrigger>
        <TabsTrigger value="settings">Calender</TabsTrigger>
      </TabsList>
      <TabsContent value="appointments" className="w-full ">
        <AppointmentsTab />
      </TabsContent>
      <TabsContent value="analytics">
        <CheckInTab />
      </TabsContent>
      <TabsContent value="reports">
        <RecallTab />
      </TabsContent>
      <TabsContent value="settings">
        <CalenderTab />
      </TabsContent>
    </Tabs>
  )
}
