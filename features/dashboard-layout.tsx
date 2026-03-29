"use client";



type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="flex h-screen overflow-hidden">
      {children}
    </div>
  );
}

export function DashboardSidebar({ children }: Props) {
 

  return (
    <>
      
      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-60 bg-white dark:bg-[#0A0F13] border-r border-gray-200 dark:border-gray-700 h-screen overflow-y-auto
          transform transition-transform duration-300 ease-in-out
          lg:relative lg:translate-x-0 lg:shrink-0
         
        `}
      >
        {children}
      </aside>
    </>
  );
}

export function DashboardNavbarSlot({ children }: Props) {
  return (
    <header className="shrink-0">
      {children}
    </header>
  );
}

export function DashboardContent({ children }: Props) {
  return (
    <main className="flex-1 overflow-y-auto dark:bg-[#0A0F13] bg-[#FAFAFA] p-1.5 sm:p-2">
      {children}
    </main>
  );
}