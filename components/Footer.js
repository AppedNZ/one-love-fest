"use client";
import Image from "next/image";
import logo from "../assets/logo.png";
import styles from "./Header.module.scss";
import Socials from "./Socials";
export default function Footer() {
  return (
    <footer className={`bg-carmine py-4`}>
      <nav className="wrapper flex justify-between items-center uppercase gap-4">
        <div className={"w-1/4 max-w-40"}>
          <Image className="w-full" width={logo.width} height={logo.height} src={logo} />{" "}
        </div>
        <Socials className={`${styles.socials} ml-auto`} />
        <a href="/" className={styles.buy}>
          <span> buy tickets</span>
        </a>
      </nav>
    </footer>
  );
}
