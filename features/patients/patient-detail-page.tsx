import Link from "next/link";
import { ArrowLeft, PlusIcon, FilePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import PatientDetailsHeader from "./components/patients-details-header";
import PatientDetails from "./components/patient-details";

interface PatientDetailPageProps {
  patientId: string;
}

export default function PatientDetailPage({ patientId }: PatientDetailPageProps) {
  return (
    <div className="font-sans p-2  ">
      <div className="mb-6 flex justify-between  items-center gap-6">
        <div className="flex items-start mb-2 gap-4">
          <Button variant="ghost" size="icon" asChild className="shrink-0">
            <Link href="/dashboard/patients" aria-label="Back to patients">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold">Patient details</h1>
            <BreadCrumb />
          </div>
        </div>


        <div className="flex gap-4">
          <Button variant="outline">
            <FilePlus />
            Start New Case Sheet
          </Button>

          <Button variant="outline">
            <PlusIcon />
            New Appointment
          </Button>
        </div>
      </div>
      <div>
        <PatientDetailsHeader />
        <PatientDetails/>
      </div>
    </div>
  );
}


function BreadCrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Patients</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">Details</BreadcrumbLink>
        </BreadcrumbItem>


      </BreadcrumbList>
    </Breadcrumb>

  )
}