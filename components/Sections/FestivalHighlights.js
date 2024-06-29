"use client";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import PromoVideoModal from "../PromoVideoModal";
import PromoVideoWrapper from "../PromoVideoWrapper";
export default function FestivalHighlights() {
  const ref = useRef();
  const inView = useInView(ref, { amount: "all", once: true });
  const [show, setShow] = useState(false);
  return (
    <section className="relative py-10 lg:py-20 2xl:py-40">
      <div className="wrapper relative z-10 flex flex-col gap-8 lg:gap-12 xl:gap-16">
        <h3 ref={ref} className="heading text-white uppercase text-center">
          One love festiVals highlights
        </h3>
        <div className="w-full overflow-hidden border-4 border-white rounded-10">
          <PromoVideoWrapper imgSrc={"/crowd-2.jpeg"} setShow={setShow} inView={inView} />
        </div>
        <PromoVideoModal setShow={setShow} show={show} />
      </div>

      <div className="-z-[1] w-full h-full absolute top-0 left-0">
        <Image
          className="pointer-events-none object-cover"
          fill
          src={"/red-bg-min.jpeg"}
          alt="pattern"
        />
      </div>
    </section>
  );
}
