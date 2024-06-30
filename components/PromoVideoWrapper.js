"use client";
import { PlayIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
export default function PromoVideoWrapper({ imgSrc, setShow, inView }) {
  return (
    <div className="w-full pb-[35%] xl:pb-[28%] relative">
      <motion.img
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        className="object-cover w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-[50%,70%] absolute transition-all group-hover:scale-105"
        loading="lazy"
        src={imgSrc ?? "/promo-video-preview.jpeg"}
      />
      <button
        onClick={() => {
          setShow(true);
        }}
        className="bg-black w-10 h-10 lg:w-16 lg:h-16 xl:w-32 xl:h-32 rounded-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 absolute flex justify-center items-center group transition-all hover:scale-105">
        <PlayIcon className="w-1/2 text-white transition-all group-hover:scale-110 group-hover:text-mustard" />
      </button>
    </div>
  );
}
