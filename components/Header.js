"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { header_links } from "../app/exports";
import logo from "../assets/logo.png";
import styles from "./Header.module.scss";
import MobileLinks from "./MobileLinks";
import Socials from "./Socials";
import SocialsHeader from "./SocialsHeader";
export default function Header() {
  const location = usePathname();
  const isHome = ["/", "/2026"].includes(location);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", function (e) {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
    return () => {
      document.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <div
      className={`${styles.header} ${isHome ? styles.home : ""} ${
        scrolled ? styles.scrolled : ""
      }`}>
      <nav className="wrapper flex justify-between items-center uppercase gap-4">
        <ul className={styles.links}>
          {header_links.slice(1, header_links.length).map((l) => (
            <Link prefetch={false} key={l.url} href={l.url}>
              {l.label}
            </Link>
          ))}
        </ul>
        <Link prefetch={false} href={"/"} className={`${styles.logo} `}>
          <Image
            className="w-full"
            quality={100}
            width={logo.width}
            height={logo.height}
            src={logo}
          />{" "}
        </Link>
        <button
          onClick={() => {
            setOpen(!open);
          }}
          className={`${styles.burger} ${open ? styles["is-open"] : ""} lg:hidden relative z-30`}>
          <div className={styles["line-top"]}></div>
          <div className={styles["line-middle"]}></div>
          <div className={styles["line-bottom"]}></div>
        </button>
        <SocialsHeader className={styles.socials} />
        <a
          href="https://www.ticketfairy.com/event/one-love-festival-2025"
          className={`${styles.buy} max-lg:hidden`}>
          <span> buy tickets</span>
        </a>
      </nav>
      <div
        className={`lg:hidden flex flex-col items-center  fixed h-svh top-0 right-0 z-10 bg-orange w-full transition-all pt-14 p-8 gap-5 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}>
        <MobileLinks
          onClick={() => {
            console.log("click");
            setOpen(false);
          }}
        />
        {false ? (
          <Link
            href={"/buy-tickets"}
            className="w-max p-4 rounded-md bg-pink leading-none font-bold text-white uppercase transition-all hover:text-pink hover:bg-white">
            <span>buy tickets</span>
          </Link>
        ) : (
          <a
            href={"https://www.ticketfairy.com/event/one-love-festival-2025"}
            className={`${styles.buy} uppercase  text-center text-xl w-max px-4 h-auto`}>
            <span className="relative top-2">buy tickets</span>
          </a>
        )}
        <Socials />
      </div>
    </div>
  );
}
