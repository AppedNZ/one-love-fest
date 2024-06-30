"use client";
import { motion } from "framer-motion";

export default function FAQ() {
  return (
    <motion.div
      key="faq"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full  flex  flex-col h-2/3 flex-grow overflow-hidden bg-black rounded-10  gap-5 p-4 2xl:p-8 uppercase  text-black ">
      <div className="flex flex-col flex-grow h-full ">
        <h5 className="text-3xl 2xl:text-6xl text-white ">Get Support</h5>

        <div className="flex flex-col h-1/2 flex-grow  w-full">
          <div className=" w-full  border-b border-white/20 flex-grow flex flex-col items-start justify-center gap-2 max-lg:py-4 max-h-32">
            <p className=" text-mustard text-left text-xl 2xl:text-3xl">General Enquiries</p>
            <p className="text-md 2xl:text-2xl">
              <a
                href="mailto:info@onelovefestival.co.nz"
                className="text-white underline hover:text-mustard">
                info@onelovefestival.co.nz
              </a>
            </p>
          </div>
          <div className=" w-full  border-b border-white/20 flex-grow flex flex-col items-start justify-center gap-2 max-lg:py-4 max-h-32">
            <p className=" text-mustard text-left text-xl 2xl:text-3xl">Vendor Enquiries:</p>
            <p className="text-md 2xl:text-2xl">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfDrKtnhk_NCmyE2M-pwJbP8TXu-wZS3YMIv19WuBU4uSYUWg/viewform"
                className="text-white underline hover:text-mustard">
                Application form
              </a>
            </p>
          </div>
          <div className=" w-full   flex-grow flex flex-col items-start justify-center gap-2 max-lg:py-4 max-h-32">
            <p className=" text-mustard text-left text-xl 2xl:text-3xl">
              Media & Sponsorship: Kristin
            </p>
            <p className="text-md 2xl:text-2xl">
              <a
                href="mailto:media@timelessgroup.co.nz"
                className="text-white underline hover:text-mustard">
                media@timelessgroup.co.nz
              </a>
            </p>
          </div>
          <div className=" w-full   flex-grow flex flex-col items-start justify-center gap-2 max-lg:py-4 max-h-32">
            <p className=" text-mustard text-left text-xl 2xl:text-3xl">Marketing: Vivian</p>
            <p className="text-md 2xl:text-2xl">
              <a
                href="mailto:vivian@timelesgroup.co.nz"
                className="text-white underline hover:text-mustard">
                vivian@timelesgroup.co.nz
              </a>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
