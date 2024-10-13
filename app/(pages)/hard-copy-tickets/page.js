"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import FaqItem from "../faq/FaqItem";
const list = [
  {
    title: "AUCKLAND CENTRAL & NORTH",
    stores: [{ title: "Doreen Poupouare", phone: "0272265259" }],
  },
  {
    title: "SOUTH AUCKLAND",
    stores: [
      { title: "Stampede Bar", phone: "09 297 8991" },
      { title: "Aishai Bates", phone: "0211812059" },
    ],
  },
  {
    title: "ROTORUA",
    stores: [{ title: "Billy Kani", phone: "02041973418" }],
  },
  {
    title: "ROTORUA/HAMILTON",
    stores: [{ title: "Sonny Marsters", phone: "0210588694" }],
  },
  {
    title: "MOUNT MAUNGANUI",
    stores: [
      { title: "Superliquor", phone: "Newton Street, Mount Maunganui", phone: "07 575 2739" },
    ],
  },
  {
    title: "NORTHLAND",
    stores: [{ title: "Jr Hogan Northland", phone: "0210675866" }],
  },
  {
    title: "WELLINGTON",
    stores: [{ title: "Paul Faapo", phone: "021 103 7268" }],
  },
  {
    title: "RED RAT STORES",
    stores: [
      { title: "Red Rat Hamilton", phone: "07 847 4150" },
      { title: "Red Rat Hastings", phone: "06 878 3640" },
      { title: "Red Rat Henderson", phone: "09 978 3535" },
      { title: "Red Rat Mangere", phone: "09 978 3532" },
      { title: "Red Rat Manukau", phone: "09 978 3536" },
      { title: "Red Rat Papakura", phone: "09 978 3534" },
      { title: "Red Rat Palmerston North", phone: "06 357 1717" },
      { title: "Red Rat Porirua", phone: "04 238 2611" },
      { title: "Red Rat Rotorua", phone: "07 347 6690" },
      { title: "Red Rat Tauranga", phone: "09 978 3543" },
      { title: "Red Rat Whangārei", phone: "09 978 3571" },
    ],
  },
];

export default function HardCopyTickets() {
  const [openId, setOpenId] = useState("AUCKLAND CENTRAL & NORTH");
  const handleOpen = (id) => {
    if (id !== openId) {
      setOpenId(id);
      return;
    }
    setOpenId(0);
  };
  return (
    <motion.div
      key="copy-tickets"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full flex flex-col lg:h-full lg:flex-grow  bg-white border-2 border-gray-400/50 rounded-10 p-4 2xl:p-8 ">
      {list &&
        list.map((adress) => (
          <FaqItem
            key={adress.title}
            question={adress.title}
            handleOpen={() => {
              handleOpen(adress.title);
            }}
            open={openId === adress.title}>
            <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2">
              {adress.stores.map(({ title, phone }, i) => (
                <div className="flex flex-col gap-1">
                  <h6 className="text-sm lg:text-lg">{title}</h6>
                  <a href={`tel:${phone}`}>{phone}</a>
                </div>
              ))}
            </div>
          </FaqItem>
        ))}
    </motion.div>
  );
}
