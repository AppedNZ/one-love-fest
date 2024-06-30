"use client";
import Dropdown from "@/components/Dropdown";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
const tabs = [
  {
    href: "ga",
    label: "General Admission(GA)",
  },
  {
    href: "vip",
    label: "VIP",
  },
  {
    href: "wip",
    label: "Platinum VVIP",
  },

  {
    href: "payment-plans",
    label: "Payment Plans",
  },
];
export default function Tabs() {
  const pathname = usePathname();
  return (
    <>
      <div className="lg:hidden">
        <Dropdown
          triggerEl={
            <button className="w-full  p-4 bg-black rounded-10 flex justify-between items-center gap-2">
              {tabs.find((tab) => pathname.endsWith(tab.href))?.label}
              <ChevronDownIcon className="rotate-0 w-4" />
            </button>
          }>
          <div className="flex flex-col  py-2 flex-wrap bg-black">
            {tabs.map((tab) => (
              <Link
                key={tab.href}
                className={`py-1 px-4   ${
                  pathname.endsWith(tab.href) ? " text-pink" : "text-white"
                }`}
                href={tab.href}>
                {tab.label}
              </Link>
            ))}
          </div>
        </Dropdown>
      </div>
      <div className="hidden lg:flex   gap-2 flex-wrap">
        {tabs.map((tab) => (
          <Link
            key={tab.href}
            className={`py-4 px-6  border border-mustard hover:bg-black hover:text-mustard rounded-10 uppercase ${
              pathname.endsWith(tab.href) ? "bg-black text-mustard" : "bg-mustard"
            }`}
            href={tab.href}>
            {tab.label}
          </Link>
        ))}
      </div>
    </>
  );
}
