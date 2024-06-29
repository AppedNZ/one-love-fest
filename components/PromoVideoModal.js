"use client";
import { PlusIcon } from "@heroicons/react/24/solid";
export default function PromoVideoModal({ show, setShow }) {
  return (
    <div
      className={`z-40 fixed top-0 left-0 bg-black/80 p-5 lg:p-10 xl:p-20 flex justify-center items-center w-dvw h-dvh ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}>
      <div className="w-full lg:w-2/3 aspect-video max-w-[1000px] relative">
        <button
          onClick={() => {
            setShow(false);
          }}
          className="absolute z-10 right-0 top-0 h-10 w-10 bg-pale-gray p-2 text-black font-bold bg-mustard uppercase">
          <PlusIcon className="w-6 rotate-45" />
        </button>
        {show && (
          <iframe
            className="object-cover absolute top-0 left-0 "
            width="100%"
            height="100%"
            frameBorder={0}
            src="https://www.youtube.com/embed/J2fWb_wyixQ?si=jKfKdxcfwTqBbk8A"
            title="YouTube video player"
            allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
        )}
      </div>
    </div>
  );
}
