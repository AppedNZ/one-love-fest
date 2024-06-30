"use client";
import { motion } from "framer-motion";
import Tabs from "./Tabs";

export default function layout({ children }) {
  return (
    <motion.div
      key="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full flex flex-col lg:h-full lg:flex-grow bg-black rounded-10 p-4 2xl:p-8 gap-6">
      <Tabs />
      {children}
    </motion.div>
  );
}
