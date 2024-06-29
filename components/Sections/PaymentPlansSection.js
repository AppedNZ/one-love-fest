import Image from "next/image";
import Btn from "../Btn";

export default function PaymentPlansSection() {
  return (
    <section className="bg-black py-10 lg:py-20 2xl:py-40">
      <div className="wrapper lg:grid lg:grid-cols-2 gap-5 2xl:gap-10">
        <div className="w-full max-lg:h-[90vw] grid grid-cols-2 grid-rows-2 gap-2 lg:gap-5 *:border-white  *:border-2 lg:*:border-4 *:rounded-10 *:overflow-hidden  max-lg:mb-10">
          <div className="w-full h-full bg-red-100 relative">
            <Image
              style={{ objectPosition: "50% 0%" }}
              fill
              className="object-cover "
              src={"/crowd-1.jpeg"}
              alt="Crowd"
            />
          </div>
          <div className="w-full h-full row-span-2 bg-fuchsia-200 relative">
            <Image
              style={{ objectPosition: "50% 0%" }}
              fill
              className="object-cover "
              src={"/crowd-tall.jpeg"}
              alt="Crowd"
            />
          </div>
          <div className="w-full h-full bg-yellow-300 relative">
            <Image
              style={{ objectPosition: "50% 0%" }}
              fill
              className="object-cover "
              src={"/crowd-2.jpeg"}
              alt="Crowd"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 xl:gap-8 2xl:gap-12 uppercase lg:text-2xl">
          <h2 className="heading text-mustard uppercase">Payment Plans Options Available</h2>
          <p>
            SHORT IN CASH? One love has you covered!
            <br />
            <span className="text-mustard ">
              We offer flexible payment plan options to start your needs!
            </span>
          </p>
          <p>
            <span className="text-mustard">Afterpay:</span> make 4 weekly payments
          </p>
          <p>
            <span className="text-mustard">TicketFairy Payment plan: </span> spread your payments
            over up to 10 weeks
          </p>
          <p>*Terms and conditions apply </p>
          <Btn as="a" variant="secondary" className={"max-w-[600px text-center"}>
            buy tickets with payment plan
          </Btn>
        </div>
      </div>
    </section>
  );
}
