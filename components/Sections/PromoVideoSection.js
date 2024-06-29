"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import PromoVideoModal from "../PromoVideoModal";
import PromoVideoWrapper from "../PromoVideoWrapper";
export default function PromoVideoSection() {
  const ref = useRef();
  const inView = useInView(ref, { amount: "all", once: true });
  const [show, setShow] = useState(false);
  return (
    <section className="pt-10 lg:pt-20 xl:pt-28 bg-mustard">
      <div className="wrapper flex flex-col gap-5 lg:gap-10">
        <h2 className="heading  text-black text-center">Promo movie one love 2025</h2>
        <div ref={ref} className="w-full bg-black rounded-10 overflow-hidden">
          <PromoVideoWrapper setShow={setShow} inView={inView} />
          <motion.p
            initial={{ y: "100px" }}
            animate={inView ? { y: "0px" } : { y: "100px" }}
            transition={{ delay: 1 }}
            className="text-center w-10/12 lg:w-3/4 uppercase pt-5 pb-4 lg:pt-8 lg:pb-6 text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl mx-auto leading-none relative transition-all">
            purchase tickets on 10-11 july to get
          </motion.p>
        </div>
      </div>
      <PromoVideoModal setShow={setShow} show={show} />
    </section>
  );
}
