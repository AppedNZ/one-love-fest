"use client";
import crowd from "@/assets/crowd-wide.jpeg";
import { motion } from "framer-motion";
import Image from "next/image";
export default function LineUp() {
  return (
    <motion.div
      key="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full  flex  flex-col  h-auto lg:h-full lg:flex-grow overflow-hidden bg-white border-2 border-gray-400/50 rounded-10  gap-5 p-4 2xl:p-8   text-black ">
      <Image
        className="w-full   lg:h-[40vh] object-cover rounded-10 flex-grow mx-auto relative z-[1] rounded-10r"
        width={crowd.width}
        height={crowd.height}
        placeholder="blur"
        src={crowd}
        alt="Crowd"
      />
      {/* <div className="w-full h-1/2 flex-grow mb-auto relative rounded-10 overflow-hidden ">
         <iframe
          className="object-cover absolute top-0 left-0 "
          width="100%"
          height="100%"
          frameBorder={0}
          src="https://www.youtube.com/embed/H_ORu9ubzy8?si=h9kMIvKy1bR-i9Ri?mute=0&autoplay=1&controls=1&loop=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen></iframe> 
      </div>*/}
      <p className="text-white text-lg xl:text-3xl uppercase text-center flex-shrink-0">
        One Love Festival is Aotearoa&apos;s premier reggae festival, featuring some of the
        world&apos;s biggest names in reggae music and providing a platform for New Zealand artists
        to not only share the stage with their heroes, but also showcase their music to the world!
      </p>
    </motion.div>
  );
}
