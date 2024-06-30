"use client";
import { motion } from "framer-motion";
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
      className="w-full flex flex-col  pt-4   lg:p-8  rounded-10  gap-5 bg-black text-black ">
      <CampingTabs current={currentTab} setCurrent={setCurrentTab} />

      {currentTab === "camping" && (
        <motion.div
          key={"camp"}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full bg-mustard rounded-10 flex flex-col gap-2 lg:gap-4 leading-none p-4 2xl:p-8  text-black ">
          <h5 className="text-pink font-black text-3xl 2xl:text-6xl  uppercase border-black/20 pb-2">
            BYO CAMPING
          </h5>
          You can purchase a 'Camping' pass on top of your festival ticket, which gives you:
          <ul className="text-sm lg:text-base">
            <li>* The opportunity to purchase a three night stay. </li>
            <li>
              * A tent site. You will need to bring your own tent but please be mindful of others by
              only using the space you need.{" "}
            </li>
            <li>* Access to hot showers. </li>
            <li>* Access to toilets. </li>
            <li> * 24/7 onsite security. </li>
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
          className="w-full bg-mustard rounded-10 flex flex-col gap-5 p-4 2xl:p-8  text-black">
          <h5 className="text-pink font-black text-3xl 2xl:text-6xl uppercase border-black/20 pb-2">
            The Village
          </h5>
          You can purchase a 'Village Package Pass' on top of your festival ticket, which gives you:
          <ul>
            <li>* The opportunity to purchase a three night stay for two or three people. </li>
            <li>
              * Bedding configurations of either 2x single airbeds or 1x double airbed for a
              two-person stay.{" "}
            </li>
            <li>* ou will need to bring your own pillow, sleeping bag, blankets and linen. </li>
          </ul>
          Two-Person stay: $370 per person. Three-Person stay: $330 per person.
        </motion.div>
      )}
      {currentTab === "glamping" && (
        <motion.div
          key={"glamp"}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1, transitionDelay: 1 }}
          className="w-full bg-mustard rounded-10 flex flex-col gap-5 p-4 2xl:p-8 text-black">
          <h5 className="text-pink font-black text-3xl 2xl:text-6xl uppercase border-black/20 pb-2">
            Glamping
          </h5>
          You can purchase a 'Glamping' pass on top of your festival ticket, which gives you:
          <ul>
            <li>* The opportunity to purchase a three night stay for two or four people. </li>
            <li>* Your own glamping site. </li>
            <li>* Accommodation in a large bell tent. </li>
            <li>
              An air mattress (single or double configurations), bed linen and pillow provided for
              you.
            </li>
            <li>* The luxury of arriving at an already set up site. </li>
            <li>* Dedicated showers. </li>
            <li>* Dedicated toilets. </li>
            <li>* Your own lantern. </li>
            <li>* 24/7 onsite security. </li>
            <li>* Secure priority parking. </li>

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
            <li>Four-Person Glamping Package: $530 per person</li>
          </ul>
        </motion.div>
      )}
    </motion.div>
  );
}
