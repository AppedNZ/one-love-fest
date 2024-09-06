"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import CampingTabs from "./CampingTabs";

export default function Camping() {
  const [currentTab, setCurrentTab] = useState("camping");
  return (
    <motion.div
      key="camping"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full flex flex-col  pt-4   lg:p-8  rounded-10  gap-5 bg-white border-2 border-gray-400/50 text-black ">
      <CampingTabs current={currentTab} setCurrent={setCurrentTab} />

      {currentTab === "camping" && (
        <motion.div
          key={"camp"}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full  flex flex-col gap-1  leading-none p-4 2xl:p-8  text-black ">
          <h5 className="text-pink font-black text-3xl 2xl:text-6xl  uppercase border-black/20 pb-2">
            BYO CAMPING
          </h5>
          <div className="w-full pb-[45%] relative rounded-lg overflow-hidden mb-5">
            <Image className="object-cover" fill src={"/camping.jpeg"} alt="Camping" />
          </div>
          You can purchase a 'Camping' pass on top of your festival ticket, which gives you:
          <ul className="text-sm lg:text-base">
            <li>* The opportunity to purchase a three night stay. </li>
            <li>
              * A tent site. You will need to bring your own tent but please be mindful of others by
              only using the space you need.{" "}
            </li>
            <li>* Access to General Store. </li>
            <li>* Access to toilets. </li>
            <li> * 24/7 onsite security and customer service. </li>
            <li>* Secure onsite parking. </li>
            <li>* Ability to purchase food and beverages. </li>
            <li>
              {" "}
              * Access to a licensed bar. Opening hours will be specified closer to the time.{" "}
            </li>
            <li>* Entertainment at certain times during the weekend. </li>
            <li> * Access to the camping area&apos;s &apos;entertainment hub&apos;. </li>
            <li>
              * Buses to transport you to and from the festival. Times to be specified.Camping
              Pricing
            </li>
          </ul>
          <p>
            BYO Camping: $99 per person <br />
            <span className="text-sm">
              *Prices will be discounted for 48 hours during the pre-sale on July 9 & 10, 2024.
            </span>
          </p>
        </motion.div>
      )}
      {currentTab === "village" && (
        <motion.div
          key={"vilage"}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1, transitionDelay: 1 }}
          className="w-full  flex flex-col  gap-1  p-4 2xl:p-8  text-black">
          <h5 className="text-pink font-black text-3xl 2xl:text-6xl uppercase border-black/20 pb-2">
            The Village
          </h5>
          <div className="w-full pb-[45%] relative rounded-lg overflow-hidden mb-5">
            <Image
              className="object-cover object-[30%,30%]"
              fill
              src={"/village.jpeg"}
              alt="The Village"
            />
          </div>
          You can purchase a 'Village Package Pass' on top of your festival ticket, which gives you:
          <ul>
            <li>* The opportunity to purchase a three night stay for two or three people. </li>
            <li>
              * Bedding configurations of either 2x single airbeds or 1x double airbed for a
              two-person stay.{" "}
            </li>
            <li>
              * You will need to bring your own pillow, sleeping bag, blankets and linen. We will
              have lanterns available for purchase, or get a refund if you return it in good order
              at our General Store{" "}
            </li>
          </ul>
          <p> Two-Person stay: $370 per person.</p>
          <p>Three-Person stay: $330 per person.</p>
          <p>Price includes $99 camping fee</p>
          <p> Three-Person bedding configuration options :</p>
          <ul>
            <li>- 3 x single airbeds</li>
            <li>- 1 x single airbed, 1 x double airbed</li>
          </ul>
        </motion.div>
      )}
      {currentTab === "glamping" && (
        <motion.div
          key={"glamp"}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1, transitionDelay: 1 }}
          className="w-full  flex flex-col gap-1 p-4 2xl:p-8 text-black">
          <h5 className="text-pink font-black text-3xl 2xl:text-6xl uppercase border-black/20 pb-2">
            Glamping
          </h5>
          <div className="w-full pb-[45%] relative rounded-lg overflow-hidden mb-5">
            <Image
              className="object-cover object-[50%,50%]"
              fill
              src={"/glamping.jpeg"}
              alt="Glamping"
            />
          </div>
          You can purchase a 'Glamping' pass on top of your festival ticket, which gives you:
          <ul>
            <li>* The opportunity to purchase a three night stay for two or four people. </li>
            <li>* Your own glamping site. </li>
            <li>* Accommodation in a large bell tent. </li>
            <li>
              An air mattress (single or double configurations), bed linen, duvet and pillow
              provided for you.
            </li>
            <li>* The luxury of arriving at an already set up site. </li>
            <li>* Dedicated showers. </li>
            <li>* Dedicated toilets. </li>
            <li>* Your own lantern. indoor mat, mirror </li>
            <li>* 24/7 onsite security and customer service. </li>
            <li>* Secure priority parking. Free bus to and from Festival </li>

            <li>
              * Access to a licensed bar. Opening hours will be specified closer to the time.{" "}
            </li>
            <li>* Ability to purchase food and beverages. </li>
            <li>* Entertainment at certain times during the weekend. </li>
            <li>* Access to the camping area's 'entertainment hub'. </li>
            <li>* Buses to transport you to and from the festival. Times to be specified. </li>
          </ul>
          <p> Glamping Pricing:</p>
          <ul>
            <li> Two-Person Glamping Package: $650 per person</li>
            <li> Three-Person Glamping Package: $590 per person</li>
            <li>Four-Person Glamping Package: $530 per person</li>
          </ul>
          <p>Price includes $99 camping fee</p>
        </motion.div>
      )}
    </motion.div>
  );
}
