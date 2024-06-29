import Image from "next/image";
import bg from "../../assets/bg.jpeg";
import logo from "../../assets/logo-hero.png";
import Btn from "../Btn";
export default function HeroSection() {
  return (
    <section className="relative min-h-svh flex flex-col items-center justify-center py-7 lg:py-10 xl:py-14 2xl:py-40">
      <div className="relative m-auto flex flex-col items-center justify-center w-10/12 xl:w-9/12 gap-4 lg:gap-8">
        <Image
          className="pointer-events-none object-cover"
          priority
          loading="eager"
          quality={100}
          width={logo.width}
          height={logo.height}
          src={logo}
          alt="pattern"
        />
        <h2 className="text-stroke text-white uppercase text-center text-[clamp(16px,2.5vw,44px)] leading-none">
          MAOLI · REBEL SOULJAHZ · J BOOG · FIJI · KATCHAFIRE CORELLA · MAGIC! · 1814 · INNER CIRCLE
          · STEEL PULSE SPAWNBREEZIE · ADEAZE · HOUSE OF SHEM · HORI SHAW TOMORROW PEOPLE · ARDIJAH
          · JOSH WAWA · K'NOVA JARO LOCAL · FIA · LOMEZ BROWN · FE JOINT · SUB-TRIBE SON & WATER ·
          TJ & HURI · LION REZZ · BRUTHA RODZ SWISS & TREE · WAYNO · THREE HOUSES DOWN GENERAL FIYAH
          · REX ATIRAI · BRADAMON · PIETER T · DEACH SAMSON SQUAD · MIKEY MAYZ · SAMMIELZ · KRISY
          ERIN CEE BLUE · PEOPLE OF THE PA · ILLUMINGATI · MIRAGE SIANNE · LOPZ & DA RASTAZ
        </h2>
        <Btn className={"max-w-max mx-auto"}>Pre register for tickets</Btn>
      </div>
      <div className="-z-[1] w-full h-full absolute top-0 left-0">
        <Image
          className="pointer-events-none object-cover"
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
