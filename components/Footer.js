"use client";
import Image from "next/image";
import logo from "../assets/logo.png";
import styles from "./Header.module.scss";
import Socials from "./Socials";
export default function Footer() {
  return (
    <footer className={`bg-carmine py-4`}>
      <nav className="wrapper flex max-md:flex-col justify-between items-center uppercase gap-4">
        <div className={"w-1/2 max-w-40"}>
          <Image className="w-full" width={logo.width} height={logo.height} src={logo} />{" "}
        </div>
        <Socials className={`${styles.socials} lg:ml-auto`} />
        <a href={"https://arep.co/p/one-love-2025--pre-register--win-1"} className={styles.buy}>
          <span> REGISTER FOR ONE LOVE PRESALE</span>
        </a>
      </nav>
    </footer>
  );
}
