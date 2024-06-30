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
          <h2 className="heading text-mustard uppercase">Payment Plan Options Available</h2>
          <p>We have short and long-term payment plan options to suit all budgets.</p>
          <p>
            <span className="text-mustard">Long-term easy finance: </span> This option gives you up
            to 10 weeks to pay off your selected passes to One Love 2025. When selecting this
            payment option, a $30 administration fee is added to each ticket to secure your
            purchase. You'll need to keep up to date with your payment schedule to ensure it doesn't
            cancel out.
          </p>
          <p>
            <span className="text-mustard">Afterpay: </span> This option allows customers to buy
            tickets now and pay over time, making it easier to secure purchases instantly.
          </p>
          <p>
            <span className="text-mustard">Instant Purchase: </span> sPay your tickets upfront using
            your debit or credit card now and your job is done.
          </p>

          <Btn
            href={"https://arep.co/p/one-love-2025--pre-register--win-1"}
            as="a"
            variant="secondary"
            className={"max-w-[600px] text-center"}>
            buy tickets with payment plan
          </Btn>
        </div>
      </div>
    </section>
  );
}
