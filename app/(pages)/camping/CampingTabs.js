"use client";
import Dropdown from "@/components/Dropdown";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
const tabs = [
  {
    href: "camping",
    label: "Camping",
  },
  {
    href: "village",
    label: "The Village",
  },
  {
    href: "glamping",
    label: "Glamping",
  },
];
export default function CampingTabs({ current, setCurrent }) {
  return (
    <>
      <div className="lg:hidden">
        <Dropdown
          triggerEl={
            <button className="w-full  p-4 bg-black rounded-10  text-white  uppercase flex justify-between items-center gap-2">
              {tabs.find((tab) => tab.href === current)?.label}
              <ChevronDownIcon className="rotate-0 w-4" />
            </button>
          }>
          <div className="flex flex-col  py-2 flex-wrap bg-black">
            {tabs.map((tab) => (
              <button
                key={tab.href}
                className={`py-1 px-4 uppercase   ${
                  tab.href === current ? " text-pink" : "text-white"
                }`}
                onClick={() => {
                  setCurrent(tab.href);
                }}>
                {tab.label}
              </button>
            ))}
          </div>
        </Dropdown>
      </div>
      <div className="hidden lg:flex   gap-2 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.href}
            className={`py-4 px-6  border border-mustard  hover:bg-black hover:text-mustard rounded-10 uppercase ${
              tab.href === current ? "bg-black text-mustard" : "bg-mustard"
            }`}
            onClick={() => {
              setCurrent(tab.href);
            }}>
            {tab.label}
          </button>
        ))}
      </div>
    </>
  );
}
