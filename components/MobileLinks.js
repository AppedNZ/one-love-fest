import LinksPart from "./LinksPart";

export default function MobileLinks({ onClick }) {
  return (
    <ul
      className={`font-bold hover:*:text-mustard   flex flex-col  uppercase w-full  justify-between  border-[3px] border-black rounded-xl max-h-[600px] mb-auto`}>
      <LinksPart
        className={`py-[clamp(8px,5%,16px)] xl:py-[clamp(16px,11%,16px)] border-b-[3px]  border-black px-8 text-xl leading-10 `}
        onClick={onClick}
      />
    </ul>
  );
}
