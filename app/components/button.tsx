"use client";
import React, { useState } from 'react';
import styles from "../styles/button.module.css";

interface Prop {
  direction: string
  show: boolean
  onClick: () => void
}

export default function Button(props: Prop) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const HoverIcon = () => {
    return (
      !isHovered ? (
        <circle cx="24" cy="24" r="23.6" fill="black" stroke="#676767" strokeWidth="0.8" />
      ) : (
        <circle cx="24" cy="24" r="24" fill="#303030" />
      )
    )
  }

  const DirectionIcon = () => {
    return (
      props.direction === 'left' ? (
        <path d="M29 32L18 24L29 16" stroke="white" strokeWidth="2" strokeLinejoin="bevel" />
      ) : (
        <path d="M19 16L30 24L19 32" stroke="white" strokeWidth="2" strokeLinejoin="bevel" />
      )
    )
  }

  return (
    <div className={`${styles.container} ${styles[props.direction]}`}
      style={{
        transform: props.show ? 'translateX(0)' : 'translateX(-999999px)',
        background: props.direction === 'left' ?
          'linear-gradient(90deg, #030303 0%, rgba(3, 3, 3, 0.80) 55.46%, rgba(3, 3, 3, 0.00) 100%);' :
          'linear-gradient(270deg, #030303 0%, rgba(3, 3, 3, 0.80) 55.46%, rgba(3, 3, 3, 0.00) 100%);'
      }}
    >
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={props.onClick}
        className={`${styles.button}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
          <HoverIcon />
          <DirectionIcon />
        </svg>
      </div>
    </div>

  );
};
