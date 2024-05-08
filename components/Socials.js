import { motion } from "framer-motion";
import Image from "next/image";
import fb from "../assets/fb.svg";
import inst from "../assets/inst.svg";
import spotify from "../assets/spotify.svg";
import tiktok from "../assets/tiktok.svg";
const socials = [
  { id: "insta", icon: inst, link: "https://www.instagram.com/onelovefestival_nz/" },
  { id: "fb", icon: fb, link: "https://www.facebook.com/onelovefestivalnz" },
  { id: "tiktok", icon: tiktok, link: "https://www.tiktok.com/@onelovefestivalnz?lang=en" },
  {
    id: "spotify",
    icon: spotify,
    link: "https://open.spotify.com/user/31vajsu3we3mvj66dcvsigcpz6ia?si=aB-_G0PUQLqH6PVGHkcISw&nd=1&dlsi=a0637a0e37d44e6a",
  },
];
export default function Socials() {
  const parent = {
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
        delayChildren: 1,
      },
    },
    hidden: {
      zIndex: 0,
      opacity: 0,
    },
  };
  const child = {
    show: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };
  return (
    <motion.div variants={parent} initial="hidden" animate="show" className="flex gap-7 ">
      {socials.map((link) => (
        <motion.a
          target="_blank"
          variants={child}
          key={link.id}
          href={link.link}
          className="w-6 h-6 inline-flex justify-center items-center  transition-all hover:scale-105 cursor-pointer">
          <Image width={link.icon.width} height={link.icon.height} src={link.icon} alt={link.id} />
        </motion.a>
      ))}
    </motion.div>
  );
}
