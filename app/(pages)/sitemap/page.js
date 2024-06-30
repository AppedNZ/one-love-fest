"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Sitemap() {
  return (
    <motion.div
      key="sitemap"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full  flex  flex-col  h-auto lg:h-full lg:flex-grow overflow-hidden bg-black rounded-10  gap-5 p-4 2xl:p-8   text-black ">
      <h5 className="text-3xl 2xl:text-6xl text-white  uppercase lg:pb-8 flex-shrink-0">Sitemap</h5>
      <Image
        width={1161}
        height={845}
        className={`w-full lg:w-auto  lg:h-[40vh] object-contain flex-grow mx-auto relative z-[1] rounded-10`}
        src={"/sitemap.jpeg"}
        alt="sitemap"
      />
    </motion.div>
  );
}
