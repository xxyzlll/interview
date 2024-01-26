"use client";

import Button from "./components/button";
import FirstCard from "./components/first-card";
import LastCard from "./components/last-card";
import SecondCard from "./components/second-card";
import ThirdCard from "./components/third-card";
import styles from "./styles/page.module.css";

export default function Home() {
  const clickToScroll = () => {
    console.log('clickToScroll');
  }

  return (
    <div>
      {/* <Button direction="left" onClick={clickToScroll} />
      <Button direction="right" onClick={clickToScroll} /> */}

      <div className={styles['flex']}>
        <FirstCard />
        <SecondCard />
        <ThirdCard />
        <LastCard />
      </div>
    </div>
  );
}
