"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import bg from "../assets/bg2.webp";
import freeshirt from "../assets/free-shirt.png";
import logo from "../assets/one-love-logo.png";
import tshirt from "../assets/t-shirt.png";
// import Socials from "../components/Socials";
// import SubmitForm from "../components/SubmitForm";
export default function Home() {
  return (
    <div className="w-screen  h-svh overflow-hidden flex flex-col items-center relative">
      {/* <Header /> */}
      <div className="flex flex-col items-center gap-3 justify-center h-1/2 flex-grow w-full relative  ">
        <div className="flex flex-col lg:grid lg:grid-cols-[1.2fr,1fr] xl:gap-14 2xl:gap-20 items-center w-full px-5 lg:px-10   max-w-[1640px]  my-auto">
          <div className="flex flex-col ">
            <motion.div
              className="w-2/3 lg:w-full relative mx-auto"
              initial={{ opacity: 0 }}
              transition={{ delay: 0.3 }}
              animate={{ opacity: 1 }}>
              <Image
                className="mx-auto "
                width={logo.width}
                height={logo.height}
                src={logo}
                alt="One Love Fest Logo"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              transition={{ delay: 0.5 }}
              animate={{ opacity: 1 }}
              className="text-lg text-stroke lg:text-4xl leading-none  text-center uppercase text-balance  py-2 darma-e mt-4">
              <span className="text-mustard">Pre-registration:</span> 1st July to 9th July
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              transition={{ delay: 0.5 }}
              animate={{ opacity: 1 }}
              className="text-lg  text-stroke lg:text-4xl leading-none   text-center uppercase text-balance  py-2 darma-e">
              <span className="text-mustard">Public Sale:</span> 9am 10th July
            </motion.p>
            <div className="w-1/2 h-px bg-white/90 flex-shrink-0 mx-auto my-1 lg:my-6 "></div>
            <motion.p
              initial={{ opacity: 0 }}
              transition={{ delay: 0.5 }}
              animate={{ opacity: 1 }}
              className="text-lg  text-stroke lg:text-4xl leading-none   text-center uppercase text-balance  py-2 darma-e">
              all tickets sold within first 24 hours recieve a free* one love 2025 t-shirt
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              transition={{ delay: 0.5 }}
              animate={{ opacity: 1 }}
              className="text-md  text-stroke lg:text-4xl leading-none   text-center uppercase text-balance  py-2 darma-e text-mustard">
              *$5 courier fee for each t-shirt
            </motion.p>
            <motion.a
              initial={{ opacity: 0 }}
              transition={{ delay: 0.5 }}
              animate={{ opacity: 1 }}
              href="https://arep.co/p/one-love-2025--pre-register--win-1"
              className="xl:text-2xl p-2 xl:p-5 mx-auto bg-black leading-none uppercase hover:bg-mustard">
              <span className="relative top-0.5"> Pre-registration</span>
            </motion.a>
          </div>
          <div className="w-1/2 lg:w-full relative">
            {/* <SubmitForm /> */}
            <Image
              sizes="100vw,(min-width:1024px) 40vw"
              className="mx-auto "
              width={tshirt.width}
              height={tshirt.height}
              src={tshirt}
              alt="One Love Fest T-Shirt"
            />
            <div className="w-1/4 h-auto absolute bottom-0 left-0 -translate-x-1/2">
              <Image
                className="mx-auto "
                width={freeshirt.width}
                height={freeshirt.height}
                src={freeshirt}
                alt="Free shirt"
              />
            </div>
          </div>
        </div>
        <p className=" w-full h-auto bottom-0 left-0 bg-black text-white text-center text-sm p-2 lg:p-4 leading-tight  text-stroke lg:text-[26px] uppercase ">
          <a
            href="https://arep.co/p/one-love-2025--pre-register--win-1"
            className="text-mustard text-md  ">
            Pre-register now
          </a>
          {"  "}
          to be the first to purchase the early bird tickets and receive a free t-shirt from one
          love 2025.
        </p>
        {/* <motion.div className="hidden lg:block absolute left-1/2 bottom-10 -translate-x-1/2 w-max">
          <Socials />
        </motion.div> */}
      </div>

      <div className="-z-[1] w-full h-full absolute top-0 left-0">
        <Image
          className="pointer-events-none object-cover"
          priority
          loading="eager"
          fill
          src={bg}
          alt="pattern"
        />
      </div>
    </div>
  );
}
