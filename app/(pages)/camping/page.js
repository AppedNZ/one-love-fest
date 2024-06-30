"use client";
import { motion } from "framer-motion";

export default function Camping() {
  return (
    <motion.div
      key="faq"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full  h-auto lg:h-full lg:flex-grow overflow-hidden grid xl:grid-cols-2   rounded-10  gap-5  text-black ">
      <div className="w-full bg-black rounded-10 flex flex-col gap-5 p-4 2xl:p-8 lg:items-center  text-white ">
        <h5 className="text-pink font-black text-3xl 2xl:text-6xl  uppercase border-black/20 pb-2">
          Camping
        </h5>
        You can purchase a 'Camping' pass on top of your festival ticket, which gives you:
        <ul>
          <li>* The opportunity to purchase a two or three night stay. </li>
          <li>
            * A tent site. You will need to bring your own tent but please be mindful of others by
            only using the space you need.{" "}
          </li>
          <li>* Access to hot showers. </li>
          <li>* Access to toilets. </li>
          <li> * 24/7 onsite security. </li>
          <li>* Secure onsite parking. </li>
          <li>* Ability to purchase food and beverages. </li>
          <li> * Access to a licensed bar. Opening hours will be specified closer to the time. </li>
          <li>* Entertainment at certain times during the weekend. </li>
          <li> * Access to the camping area&apos;s &apos;entertainment hub&apos;. </li>
          <li>
            * Buses to transport you to and from the festival. Times to be specified.Camping Pricing
          </li>
        </ul>
        <p>Camping Pricing</p>
        <p>TBA</p>
      </div>
      <div className="w-full bg-mustard rounded-10 flex flex-col gap-5 p-4 2xl:p-8 lg:items-center text-black">
        <h5 className="text-pink font-black text-3xl 2xl:text-6xl uppercase border-black/20 pb-2">
          Glamping
        </h5>
        You can purchase a 'Glamping' pass on top of your festival ticket, which gives you:
        <ul>
          <li>* The opportunity to purchase a two or three night stay. </li>
          <li>* Your own glamping site. </li>
          <li>* Accommodation in a large bell tent. </li>
          <li>
            * An air mattress (single or double configuration) and bed linen provided for you.{" "}
          </li>
          <li>* The luxury of arriving at an already set up site. </li>
          <li>* Dedicated showers. </li>
          <li>* Dedicated toilets. </li>
          <li>* Your own lantern. </li>
          <li>* 24/7 onsite security. </li>
          <li>* Secure priority parking. </li>
          <li>* Complimentary water. </li>
          <li>* Access to a licensed bar. Opening hours will be specified closer to the time. </li>
          <li>* Ability to purchase food and beverages. </li>
          <li>* Entertainment at certain times during the weekend. </li>
          <li>* Access to the camping area's 'entertainment hub'. </li>
          <li>* Buses to transport you to and from the festival. Times to be specified. </li>
        </ul>
        <p> Glamping Pricing</p>
        <p>TBA</p>
      </div>
    </motion.div>
  );
}
