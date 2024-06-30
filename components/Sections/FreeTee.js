import Image from "next/image";
import freeshirt from "../../assets/free-shirt-left.png";
import tshirt from "../../assets/t-shirt.png";
import Btn from "../Btn";
export default function FreeTee() {
  return (
    <section className="bg-mustard py-5 pb-10 lg:pb-14 xl:pb-20">
      <div className="wrapper p-5  relative">
        <div className="relative   w-full p-10 lg:p-[4%] ">
          <div className="w-full flex flex-col  lg:grid lg:grid-cols-[25vw,1fr,0.3fr,max-content] items-center  justify-between  relative z-10">
            <p className="lg:w-full text-[clamp(18px,11.5vw,80px)] max-lg:text-center lg:text-[clamp(18px,3.5vw,80px)] text-stroke uppercase leading-none">
              A free one <br className="max-lg:hidden" /> love tee
            </p>
            <div className="w-full  relative">
              <Image
                width={tshirt.width}
                height={tshirt.height}
                className="w-full lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 h-auto max-h-[472px] object-contain "
                src={tshirt}
                alt="Tshirt"
              />
              <Image
                width={freeshirt.width}
                height={freeshirt.height}
                className="lg:hidden absolute w-1/4 top-1/2 left-1/2  translate-y-[15%] translate-x-[95%]"
                src={freeshirt}
                alt="Free Tshirt"
              />
            </div>
            <div className=" max-lg:hidden w-1/4 lg:w-full max-w-max">
              <Image
                width={freeshirt.width}
                height={freeshirt.height}
                className=" translate-y-[15%] -translate-x-[55%]"
                src={freeshirt}
                alt="Free Tshirt"
              />
            </div>
            <div className="w-full  flex justify-center lg:justify-end">
              <Btn
                as="a"
                href="https://arep.co/p/one-love-2025--pre-register--win-1"
                variant="secondary"
                className={
                  "text-balance text-center max-w-[460px] max-lg:text-4xl lg:max-w-[265px] w-full flex-shrink-0"
                }>
                pre register <br className="max-lg:hidden" /> for tickets
              </Btn>
            </div>
          </div>
          <Image
            fill
            className="object-cover rounded-10"
            src={"/red-bg.jpeg"}
            alt="Red Paper texture"
          />
        </div>
      </div>
    </section>
  );
}
