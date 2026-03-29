"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { MdOutlineDashboardCustomize } from "react-icons/md";
import { BsClipboard2Check } from "react-icons/bs";

import { IoSettingsOutline } from "react-icons/io5";
import { FaBed } from "react-icons/fa";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FaStethoscope } from "react-icons/fa6";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { GrTransaction } from "react-icons/gr";
import { BiTestTube } from "react-icons/bi";
import { GiMedicines } from "react-icons/gi";
import { FaRegHandshake } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";
import { MdOutlineInventory2 } from "react-icons/md";
import { RiAdvertisementLine } from "react-icons/ri";

import { TbReportSearch } from "react-icons/tb";
const NAV_ITEMS = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <MdOutlineDashboardCustomize size={20} />,
  },
  {
    label: "Appointments",
    href: "/dashboard/appointments",
    icon: <BsClipboard2Check size={20} />,
  },
  {
    label: "Dr. Dashboard",
    href: "/dashboard/dr-dashboard",
    icon: <FaStethoscope size={20} />,
  },
  {
    label: "Patients",
    href: "/dashboard/patients",
    icon: <FaBed size={20} />
  },
  {
    label: "Invoices",
    href: "/dashboard/invoices",
    icon: <LiaFileInvoiceSolid size={20} />,
  },
  {
    label: "Transactions",
    href: "/dashboard/transactions",
    icon: <GrTransaction size={20} />,
  },
  {
    label: "Lab Tests",
    href: "/dashboard/lab-tests",
    icon: <BiTestTube size={20} />,
  },
  {
    label: "Medications",
    href: "/dashboard/medications",
    icon: <GiMedicines size={20} />,
  },
  {
    label: "Vendors",
    href: "/dashboard/vendors",
    icon: <FaRegHandshake size={20} />,
  },
  {
    label: "Consentforms",
    href: "/dashboard/forms",
    icon: <FaWpforms size={20} />,
  },
  {
    label: "Inventory",
    href: "/dashboard/inventory",
    icon: <MdOutlineInventory2 size={20} />,
  },
  {
    label: "Marketing",
    href: "/dashboard/marketing",
    icon: <RiAdvertisementLine size={20} />,
  },
];

const BOTTOM_NAV_ITEMS = [
 
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: <IoSettingsOutline size={20} />,
  },
  {
    label: "Reports",
    href: "/dashboard/reports",
    icon: <TbReportSearch size={20} />,
  },
   {
    label: "Help & Support",
    href: "/dashboard/help",
    icon: <IoMdHelpCircleOutline size={20} />,
  }
];

export default function Sidebar() {
  const pathname = usePathname();

  const allItems = [...NAV_ITEMS, ...BOTTOM_NAV_ITEMS];
  const active =
    allItems.find((item) =>
      item.href !== "/dashboard"
        ? pathname.startsWith(item.href)
        : pathname === item.href,
    )?.label ?? "Dashboard";

  return (
    <div className="flex font-sans flex-col dark:bg-[#0A0F13]   h-full">
      <div className="flex items-center gap-3 px-4 pt-6 pb-6 ">
        <Link href="/">
          <Image
            src="/logonew.png"
            alt="Logo"
            width={180}
            height={24}
            className="dark:block dark:invert"
          ></Image>
        </Link>
      </div>

      <nav className=" space-y-1 px-3 pb-6">
        {NAV_ITEMS.map(({ label, icon, href }) => (
          <Link key={label} href={href}>
            <button
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 text-left font-medium text-sm ${
                active === label
                  ? "bg-[#E6FAF6] dark:bg-[#07262A] text-[#0CC8A8]"
                  : "text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-[#646F7F] hover:text-gray-900"
              }`}
            >
              {icon}
              <span>{label}</span>
            </button>
          </Link>
        ))}
      </nav>

      <div className="border-t dark:border-gray-700 border-gray-200 mx-4 my-1" />

      <nav className="space-y-1 px-3 pb-4 pt-6">
        {BOTTOM_NAV_ITEMS.map(({ label, icon, href }) => (
          <Link key={label} href={href}>
            {" "}
            <button
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 text-left font-medium text-sm ${
                active === label
                  ? "bg-[#E6FAF6] dark:bg-[#07262A] text-[#0CC8A8]"
                  : "text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-[#646F7F] hover:text-gray-900"
              }`}
            >
              {icon}
              <span>{label}</span>
            </button>
          </Link>
        ))}
      </nav>

      <div className="flex-1" />

      <div className="border-t dark:border-gray-700 border-gray-200 px-4 py-4">
        <button className="w-full flex items-center gap-3 hover:opacity-80 transition">
          <Image
            src="/dashboard/avatar.png"
            alt="User Image"
            width={36}
            height={36}
            className="rounded-full"
          />
          <div className="flex-1 min-w-0 text-left">
            <p className="text-xs dark:text-white text-gray-500 truncate">
              admin@edu.com
            </p>
            <p className="text-sm dark:text-[#352E2D] font-semibold text-gray-900 truncate">
              Shrey Singh
            </p>
          </div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-gray-400 shrink-0"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
