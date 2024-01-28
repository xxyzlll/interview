"use client";
import { useRef, useState } from "react";
import Button from "./components/button";
import Card from "./components/card";
import styles from "./styles/page.module.css";

export default function Home() {
  const scrollRef = useRef<any>(null);
  const [buttonVisible, setButtonVisible] = useState(true);

  const scrollToLeft = () => {
    scrollRef.current.scrollTo({ left: 0 });
  };

  const scrollToRight = () => {
    const containerWidth = scrollRef.current.offsetWidth;
    const contentWidth = scrollRef.current.scrollWidth;
    const maxScrollLeft = contentWidth - containerWidth;
    scrollRef.current.scrollTo({ left: maxScrollLeft });
  };

  const handleScroll = () => {
    const containerWidth = scrollRef.current.offsetWidth;
    const contentWidth = scrollRef.current.scrollWidth;
    const maxScrollLeft = contentWidth - containerWidth;

    if (scrollRef.current.scrollLeft === maxScrollLeft) {
      setButtonVisible(false);
    } else {
      setButtonVisible(true);
    }
  };

  // 子组件配置信息数组
  const cardConfigs = [
    {
      title: "Introduction to programming",
      tags: ["beginner"],
      options: {
        showFooter: true,
        bgImage: "/images/first-card.png",
        bgRectImage: "/images/first-bg.png",
        showHeadRect: true,
        rectBgColor:
          "linear-gradient(rgb(56, 193, 165) 0%, rgb(8, 145, 213) 100%);",
        showButton: true,
      },
      content:
        "This course covers the most basic concepts in programming using Solidity as an example.",
    },
    {
      title: "Moonshot 2023 Summer Hackathon",
      tags: ["All Tracks", "Solidity", "2K"],
      options: {
        showFooter: false,
        showHeadRect: false,
        bgImage: "/images/second-card.png",
        bgRectImage: "/images/second-bg.png",
        showInfo: true,
      },
    },
    {
      title: "Web 3.0 Programming Basics",
      tags: ["beginner"],
      options: {
        showFooter: true,
        bgImage: "/images/third-card.png",
        bgRectImage: "/images/third-bg.png",
        rectBgColor:
          " linear-gradient(rgb(217, 227, 19) 0%, rgb(60, 188, 52) 100%);",
        showHeadRect: true,
      },
      content:
        "Basic concepts in programming of Solidity. Topics include: variables, functions, flow control, error handling, data structure.",
    },
    {
      title: "",
      tags: [],
      options: {
        showFooter: false,
        bgImage: "/images/last-card.png",
        bgRectImage: "/images/last-bg.png",
        rectBgColor:
          " linear-gradient(rgb(217, 227, 19) 0%, rgb(60, 188, 52) 100%);",
        showHeadRect: false,
      },
    },
  ];

  return (
    <div>
      <Button direction="left" show={!buttonVisible } onClick={scrollToLeft} />
      <Button direction="right" show={buttonVisible } onClick={scrollToRight} />

      <div className={styles["flex"]} ref={scrollRef} onScroll={handleScroll}>
        {cardConfigs.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
}
