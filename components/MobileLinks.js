import LinksPart from "./LinksPart";

export default function MobileLinks({ onClick }) {
  return (
    <ul
      className={`font-bold hover:*:text-mustard   flex flex-col  uppercase w-full  justify-between  lg:border-[3px] lg:border-black rounded-xl max-h-[600px] mb-auto`}>
      <LinksPart
        className={`py-[clamp(8px,5%,16px)] xl:py-[clamp(16px,11%,16px)] lg:border-b-[3px]  lg:border-black lg:px-8 text-xl leading-10 `}
        onClick={onClick}
      />
    </ul>
  );
}
