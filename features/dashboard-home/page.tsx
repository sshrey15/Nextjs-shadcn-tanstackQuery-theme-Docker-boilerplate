import TableComponent from "./components/appointments-table";
import DrActivityWindow from "./components/dr-activity-window";
import StatCard from "./components/stat-card";
import LatestTransactions from "./components/transactions";

export default function DashboardHome() {
    return (
        <>
        <div className="  font-sans  p-2 ">
            <h1 className="text-2xl mb-6 font-bold">Admin Dashboard</h1>
            <StatCard />
        </div>
        <div className="font-sans p-2">
            <TableComponent/>
        </div>

        <div className="grid grid-cols-2 font-sans    gap-4 p-2">
            <div>
                   <DrActivityWindow/>
            </div>

            <div>
                     <LatestTransactions/>
            </div>
        </div>
            
        </>
           
      
    )
}