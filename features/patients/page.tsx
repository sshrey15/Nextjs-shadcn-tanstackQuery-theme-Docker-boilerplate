
import PatientsTable from "./components/patients-table";

export default function PatientsPage(){
    return(
        <>
              <div className="  font-sans  p-2 ">
            <h1 className="text-2xl mb-6 font-bold">All Patients</h1>
        </div>
        <div className="font-sans p-2">
            <PatientsTable/>
        </div>

    
        </>
    )
}