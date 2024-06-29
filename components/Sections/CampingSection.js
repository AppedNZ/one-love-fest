import Image from "next/image";
import styles from "./CampingSection.module.scss";
export default function CampingSection() {
  return (
    <section className="bg-black py-10 lg:py-20 2xl:py-40">
      <div className="wrapper lg:grid lg:grid-cols-2 gap-5 2xl:gap-10">
        <div className="w-full flex flex-col gap-4 xl:gap-8 2xl:gap-12 uppercase lg:text-2xl">
          <h2 className="heading text-mustard uppercase">One love camping and glamping</h2>
          <p>Need accommodation?</p>
          <p className="text-mustard ">Looking for a place to stay during the One Love Festival?</p>
          <p>We&apos;ve got you covered with our awesome camping and glamping options!</p>
          <p>
            Come spend the weekend with us at the one love camping grounds. We&apos;ve got
            everything you need for an amazing experiences.
          </p>
          <p>
            <span className="text-mustard ">Clean toilets and shower </span>
            <br />
            Bars for pre-party fun and after-parties with five DJs
            <br />
            <span className="text-mustard ">24/7 security to keep you safe </span>
            <br />
            Convenient shuttle buses to and from the festival <br />
            <span className="text-mustard ">and so much more!</span>
          </p>
        </div>
        <div className="w-full   flex flex-col">
          <div className="max-lg:hidden w-full h-full bg-red-100 relative *:border-white  border-2 lg:border-4 rounded-10 overflow-hidden">
            <Image
              style={{ objectPosition: "50% 0%" }}
              fill
              className="object-cover "
              src={"/camping.jpeg"}
              alt="Camping"
            />
          </div>
          <div
            style={{ "--caption-chars": "1 st rel. $239 Save $20".length }}
            className={styles.inner}>
            <div
              style={{ "--chars": "GA 2 Day Pass".length }}
              className={`${styles.pass} ${styles.ga}`}>
              <p className={styles.head}>GA 2 Day Pass</p>
              <div className="flex items-center justify-between">
                <p className={styles.earlyBird}>early bird</p>
                <p style={{ "--price-chars": "$499".length }} className={styles.price}>
                  $219
                </p>
              </div>
              <p className={styles.caption}>1 st rel. $239 Save $20 </p>
            </div>
            <div className={`${styles.pass} ${styles.vip}`}>
              <p style={{ "--chars": "vip 2 Day Pass".length }} className={styles.head}>
                vip 2 Day Pass
              </p>
              <div className="flex items-center justify-between">
                <p className={styles.earlyBird}>early bird</p>
                <p style={{ "--price-chars": "$499".length }} className={styles.price}>
                  $349
                </p>
              </div>
              <p className={styles.caption}>1 st rel. $239 Save $20 </p>
            </div>
            <div className={`${styles.pass} ${styles.vvip}`}>
              <p style={{ "--chars": "vvip 2 Day Pass".length }} className={styles.head}>
                vvip 2 Day Pass
              </p>
              <div className="flex items-center justify-between">
                <p className={styles.earlyBird}>early bird</p>
                <p style={{ "--price-chars": "$1499".length }} className={styles.price}>
                  $1499
                </p>
              </div>
              <p className={styles.caption}>1 st rel. $239 Save $20 </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
