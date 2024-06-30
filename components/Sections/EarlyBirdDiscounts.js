"use client";
import styles from "./EarlyBird.module.scss";
export default function EarlyBirdDiscounts() {
  return (
    <section className={styles.section}>
      <div
        style={{ "--caption-chars": "1 st rel. $239 Save $20".length }}
        className={`wrapper ${styles.inner}`}>
        <p className={`${styles.unlock} heading text-black`}>& unlock early bird discounts</p>
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
          {/* <p className={styles.caption}>1 st rel. $239 Save $20 </p> */}
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
          {/* <p className={styles.caption}>1 st rel. $239 Save $20 </p> */}
        </div>
      </div>
    </section>
  );
}
