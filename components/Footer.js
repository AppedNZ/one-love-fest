"use client";
import Image from "next/image";
import logo from "../assets/logo.png";
import styles from "./Header.module.scss";
import Socials from "./Socials";
export default function Footer() {
  return (
    <footer className={`bg-carmine py-4`}>
      <nav className="wrapper flex flex-wrap max-md:flex-col justify-between items-center uppercase gap-4">
        <div className={"w-1/2 max-w-40"}>
          <Image className="w-full" width={logo.width} height={logo.height} src={logo} />{" "}
        </div>
        <p className=" text-center font-mono ml-auto ">
          Website by{" "}
          <a href="https://www.apped.nz" className="underline text-blue-300">
            Apped
          </a>
        </p>
        <Socials className={`${styles.socials} `} />
        <a
          style={{ height: "auto" }}
          href={"https://arep.co/p/one-love-2025--pre-register--win-1"}
          className={`${styles.buy} flex py-4 flex-shrink-0 text-balance text-center h-auto`}>
          <span className="relative top-0.5 ">
            REGISTER FOR ONE <br /> LOVE PRESALE
          </span>
        </a>
      </nav>
    </footer>
  );
}
