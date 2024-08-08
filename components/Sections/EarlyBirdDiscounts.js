"use client";
import styles from "./EarlyBird.module.scss";
export default function EarlyBirdDiscounts() {
  return (
    <section className={styles.section}>
      <div style={{ "--caption-chars": "Save $200".length }} className={`wrapper ${styles.inner}`}>
        <p className={`${styles.unlock} heading text-black`}>
          Presale access unlocks early bird discounts
        </p>
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

          <p className={`${styles.caption} ${styles.soldout}`}>
            <span>sold out</span>{" "}
          </p>
        </div>
        <div className={`${styles.pass} ${styles.vip}`}>
          <p style={{ "--chars": "vip 2 Day Pass".length }} className={styles.head}>
            vip 2 Day Pass
          </p>
          <div className="flex items-center justify-between">
            <p className={styles.earlyBird}>early bird</p>
            <p style={{ "--price-chars": "$499".length }} className={styles.price}>
              $329
            </p>
          </div>
          <p className={styles.caption}>Save $20 </p>
        </div>
        <div className={`${styles.pass} ${styles.vvip}`}>
          <p style={{ "--chars": "vvip 2 Day Pass".length }} className={styles.head}>
            vvip 2 Day Pass
          </p>
          <div className="flex items-center justify-between">
            <p className={styles.earlyBird}>early bird</p>
            <p style={{ "--price-chars": "$1499".length }} className={styles.price}>
              $1399
            </p>
          </div>
          <p className={styles.caption}> Save $100 </p>
        </div>
      </div>
    </section>
  );
}
