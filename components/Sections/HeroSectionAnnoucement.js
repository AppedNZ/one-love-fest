"use client";
import Image from "next/image";
import bg from "../../assets/home/back-min.jpg";
import logo from "../../assets/new-logo.png";
import Btn from "../Btn";
import Socials from "../Socials";
export default function HeroSectionAnnouncement() {
  return (
    <section className="relative min-h-svh flex flex-col items-center  pt-0 ">
      <div className="relative mx-auto flex flex-col items-center  w-full lg:w-[clamp(500px,80vw,1560px)]  max-lg:overflow-x-hidden ">
        <Image
          className="pointer-events-none object-cover  "
          priority
          loading="eager"
          quality={100}
          width={logo.width}
          height={logo.height}
          src={logo}
          alt="pattern"
        />
        <p className="font-matiz uppercase text-[clamp(18px,5vw,30px)] font-black text-black leading-tight text-center lg:w-[64vw] relative lg:-top-5">
          2026 details coming soon
          <br />
          Register now to get the info first
        </p>

        <Btn
          as="a"
          variant="primary"
          href={"https://forms.gle/zePCeY8z4JKNf1Sv8"}
          className={" mx-auto p-4 bg-orange max-lg:my-5"}>
          Register here
        </Btn>
        <div className="lg:hidden">
          <Socials />
        </div>
      </div>

      <div className="-z-[1] w-full h-full absolute top-0 left-0 ">
        <Image
          className="pointer-events-none object-cover gradient max-lg:object-left-bottom"
          priority
          loading="eager"
          fill
          src={bg}
          placeholder="blur"
          alt="pattern"
        />
      </div>
    </section>
  );
}
