"use client";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { header_links } from "../app/exports";

export default function LinksPart({ desktop = false, className = "", onClick }) {
  const pathname = usePathname();
  const handle = pathname !== "/" && pathname.split("/").at(1);

  return (
    <>
      {header_links.slice(0, header_links.length).map((link, i) => (
        <li key={link.url}>
          <Link
            className={`${className} ${
              i + 1 === header_links.length ? "border-none" : ""
            } flex items-center justify-between ${
              link.url.includes(handle) ? "text-mustard lg:text-white lg:bg-mustard " : ""
            }`}
            onClick={onClick}
            href={link.url}>
            {link.label}
            <ChevronRightIcon
              className={`w-6  ${
                link.url.includes(handle)
                  ? "text-mustard lg:text-white rotate-180"
                  : "text-white lg:text-black"
              }`}
            />
          </Link>
        </li>
      ))}
    </>
  );
}
