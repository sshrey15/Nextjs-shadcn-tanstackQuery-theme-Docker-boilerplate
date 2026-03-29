

import DashboardHome from '@/features/dashboard-home/page';
import AppointmentsPage from '@/features/appointments/page';
import DrDashboardPage from '@/features/dr-dashboard/page';
import InvoicesPage from '@/features/invoices/page';
import TransactionsPage from '@/features/transactions/page';
import LabTestsPage from '@/features/labs/page';
import MedicationsPage from '@/features/pharmacy/page';
import VendorsPage from '@/features/vendor/page';
import ConsentFormsPage from '@/features/consent-forms/page';
import InventoryPage from '@/features/inventory/page';
import MarketingPage from '@/features/marketing/page';
import SettingsPage from '@/features/settings/page';
import ReportsPage from '@/features/reports/page';
import HelpSupportPage from '@/features/docs/page';
import PatientsPage from '@/features/patients/page';

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

 
  const pageMap: { [key: string]: React.ReactNode } = {
    'dashboard': <DashboardHome />,
    'appointments': <AppointmentsPage />,
    'dr-dashboard': <DrDashboardPage />,
    'patients': <PatientsPage/>,
    'invoices': <InvoicesPage />,
    'transactions': <TransactionsPage />,
    'lab-tests': <LabTestsPage />,
    'medications': <MedicationsPage />,
    'vendors': <VendorsPage />,
    'forms': <ConsentFormsPage />,
    'inventory': <InventoryPage />,
    'marketing': <MarketingPage />,
    'settings': <SettingsPage />,
    'reports': <ReportsPage />,
    'help': <HelpSupportPage />,
  };

  const page = pageMap[slug];

  if (!page) {
    return (
      <div className="font-sans p-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
          <h1 className="text-2xl font-bold text-red-600">Page Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">The page &quot;{slug}&quot; does not exist.</p>
        </div>
      </div>
    );
  }

  return <>{page}</>;
}