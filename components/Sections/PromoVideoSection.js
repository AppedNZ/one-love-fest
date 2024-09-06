"use client";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import PromoVideoModal from "../PromoVideoModal";
import PromoVideoWrapper from "../PromoVideoWrapper";
export default function PromoVideoSection() {
  const ref = useRef();
  const inView = useInView(ref, { amount: "all", once: true });
  const [show, setShow] = useState(false);
  return (
    <section className="py-10 lg:py-20 xl:py-28 bg-mustard">
      <div className="wrapper flex flex-col gap-5 lg:gap-10">
        <h2 className="heading  text-black text-center">ONE LOVE 2025 - VIDEO ANNOUNCEMENT</h2>
        <div ref={ref} className="w-full bg-black rounded-10 overflow-hidden">
          <PromoVideoWrapper
            absolute={false}
            setShow={setShow}
            inView={inView}
            imgSrc={"/preview.jpeg"}
          />
        </div>
      </div>
      <PromoVideoModal setShow={setShow} show={show} />
    </section>
  );
}
