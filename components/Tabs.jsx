import React, { useState } from "react";
import Container from "./ui/Container";
import styles from "../styles/Tabs.module.scss";
import { BsHeadphones } from "react-icons/bs";
import { TABS_DATA } from "../data/data";

const Tabs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className={styles["tab-wrapper"]}>
      <Container>
        <div className={styles.row}>
          {TABS_DATA.map((tab) => {
            const { id, tabIcon, tabButton, tabDesc } = tab;
            return (
              <div className={styles.col} key={id}>
                <article
                  className={styles["tab-btn"]}
                  onClick={(id) => setCurrentIndex(id)}
                >
                  <span className={styles.icon}>{tabIcon}</span>
                  <h3>{tabButton}</h3>
                </article>
              </div>
            );
          })}
        </div>
        <div className={styles["tab-panel"]}>
          <p>{TABS_DATA[currentIndex].tabDesc}</p>
        </div>
      </Container>
    </div>
  );
};

export default Tabs;
