import React from "react";
import styles from "../styles/PromoBanner.module.scss";

const PromoBanner = () => {
  return (
    <section className={styles["banner-wrapper"]}>
      <div className={styles.row}>
        <div className={`${styles.col} ${styles.banner}`}>
          <h2 className={styles.title}>Promo box</h2>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
            possimus nostrum quia, deleniti assumenda ad blanditiis corrupti
            enim
          </p>
          <button className={styles.btn}>Get in Touch</button>
        </div>
        <div className={`${styles.col} ${styles.banner}`}>
          <h2 className={styles.title}>Promo box</h2>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
            possimus nostrum quia, deleniti assumenda ad blanditiis corrupti
            enim
          </p>
          <button className={styles.btn}>Get in Touch</button>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
