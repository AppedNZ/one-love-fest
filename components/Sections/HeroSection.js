import lineup from "@/assets/home/lineup.png";
import Image from "next/image";
import artists from "../../assets/home/artists-desktop.png";
import artistsMob from "../../assets/home/artists-mob.png";
import bg from "../../assets/home/back-min.jpg";
import logo from "../../assets/home/logo-cropped.png";
import Btn from "../Btn";
export default function HeroSection() {
  return (
    <section className="relative lg:min-h-svh flex flex-col items-center justify-center pt-0  xl:pt-24 2xl:pt-36">
      <Image
        className="pointer-events-none  absolute h-full w-auto left-0 bottom-0 object-bottom object-contain max-lg:hidden"
        priority
        loading="eager"
        quality={100}
        width={artists.width}
        height={artists.height}
        src={artists}
        alt="Artists"
      />

      <div className="relative m-auto flex flex-col items-center justify-center w-full lg:w-[30vw]  lg:gap-8 max-lg:overflow-x-hidden ">
        <Image
          className="pointer-events-none object-cover max-lg:w-1/2 "
          priority
          loading="eager"
          quality={100}
          width={logo.width}
          height={logo.height}
          src={logo}
          alt="pattern"
        />
        <div className="w-full h-[55svh] relative lg:hidden">
          <Image
            className="pointer-events-none w-full absolute h-auto top-0 left-0 -translate-y-[15%] lg:hidden"
            priority
            loading="eager"
            quality={100}
            width={artistsMob.width}
            height={artistsMob.height}
            src={artistsMob}
            alt="Artists"
          />
        </div>

        <Image
          className="w-11/12 mx-auto lg:hidden relative z-10 translate-y-[1%]"
          priority
          loading="eager"
          quality={100}
          width={lineup.width}
          height={lineup.height}
          src={lineup}
          alt="Lineup"
        />

        <div className="w-full lg:hidden">
          <Btn
            as="a"
            variant="orange"
            href={"https://www.ticketfairy.com/event/one-love-festival-2025"}
            className={" mx-auto my-14 bg-orange "}>
            Buy Tickets
          </Btn>
        </div>
      </div>
      <Image
        className="pointer-events-none w-[29vw] absolute top-1/2 right-[5%] -translate-y-[45%] max-lg:hidden"
        priority
        loading="eager"
        quality={100}
        width={lineup.width}
        height={lineup.height}
        src={lineup}
        alt="Lineup"
      />
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
