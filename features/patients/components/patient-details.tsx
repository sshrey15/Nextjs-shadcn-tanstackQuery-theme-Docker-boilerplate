import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

export default function PatientDetails() {
    return (
        <>
            <Tabs defaultValue="appointments" className="max-w-8xl mt-10 ">
                <TabsList className="bg-[#E6FAF6] w-8xl "  >
                    <TabsTrigger value="appointments">Appointments</TabsTrigger>
                    <TabsTrigger value="analytics">Treatment Cases</TabsTrigger>
                    <TabsTrigger value="reports">Records</TabsTrigger>
                    <TabsTrigger value="settings">Lab Orders</TabsTrigger>
                    <TabsTrigger value="notes">Notes</TabsTrigger>
                    <TabsTrigger value="invoices">Invoices</TabsTrigger>
                    <TabsTrigger value="consent_forms">Consent Forms</TabsTrigger>
                </TabsList>
                <TabsContent value="appointments" className="w-full ">
                    {/* <AppointmentsTab /> */}
                </TabsContent>
                <TabsContent value="analytics">
                    {/* <CheckInTab /> */}
                </TabsContent>
                <TabsContent value="reports">
                    {/* <RecallTab /> */}
                </TabsContent>
                <TabsContent value="settings">
                    {/* <CalenderTab /> */}
                </TabsContent>
            </Tabs>
        </>
    )
}