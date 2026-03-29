import { notFound } from "next/navigation";
import PatientDetailPage from "@/features/patients/patient-detail-page";

interface PageProps {
  params: Promise<{ slug: string; id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug, id } = await params;

  if (slug !== "patients") {
    notFound();
  }

  return <PatientDetailPage patientId={id} />;
}
