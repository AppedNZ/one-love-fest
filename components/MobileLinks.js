import LinksPart from "./LinksPart";

export default function MobileLinks({ onClick }) {
  return (
    <ul
      className={`font-bold hover:*:text-mustard lg:text-black lg:bg-white  flex flex-col  uppercase w-full  justify-between  lg:border-[3px] lg: lg:border-gray-400/40 rounded-xl max-h-[600px] mb-auto`}>
      <LinksPart
        className={`py-[clamp(8px,2%,16px)] xl:py-[clamp(16px,11%,16px)] lg:border-b-[3px]  lg:border-gray-400/40 lg:px-8 text-xl leading-10 `}
        onClick={onClick}
      />
    </ul>
  );
}
