import bg from "@/assets/bg.jpeg";
import Header from "@/components/Header";
import MobileLinks from "@/components/MobileLinks";
import Image from "next/image";
export default function RootLayout({ children }) {
  return (
    <section className="min-h-dvh flex flex-col">
      <div className="absolute top-0 left-0 w-full">
        <Header />
      </div>
      <div className="opacity-0 pointer-events-none">
        <Header />
      </div>
      <Image
        className="pointer-events-none w-screen h-screen fixed z-[-1]  object-cover top-0 left-0 "
        sizes="100vw"
        width={bg.width}
        height={bg.height}
        quality={85}
        src={bg}
        alt="pattern"
      />

      <div className="wrapper flex flex-grow h-1/2 flex-shrink-0 z-0 pb-10 ove">
        <div className="relative z-10 flex flex-col w-full lg:grid grid-cols-[clamp(200px,25%,300px),1fr] h-auto  gap-10 ">
          <div className="hidden lg:block sticky top-5 h-max">
            <MobileLinks />
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
