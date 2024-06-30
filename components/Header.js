"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { header_links } from "../app/exports";
import logo from "../assets/logo.png";
import styles from "./Header.module.scss";
import Socials from "./Socials";
export default function Header() {
  const location = usePathname();
  const isHome = location === "/";
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
          {header_links.map((l) => (
            <Link key={l.url} href={l.url}>
              {l.label}
            </Link>
          ))}
        </ul>
        <Link href={"/"} className={styles.logo}>
          <Image className="w-full" width={logo.width} height={logo.height} src={logo} />{" "}
        </Link>
        <Socials className={styles.socials} />
        <a href="https://arep.co/p/one-love-2025--pre-register--win-1" className={styles.buy}>
          <span> buy tickets</span>
        </a>
      </nav>
    </div>
  );
}
