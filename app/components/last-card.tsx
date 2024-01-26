"use client";
import styles from "../styles/card.module.css";

export default function LastCard() {

  return (
    <div className={`${styles.container} ${styles.first}`}>
      <div className={styles['rect-line']} />
      <div className={styles['card-title']}>Introduction to programming</div>
      <div className={styles['card-begin']}>Beginner</div>
      <div className={styles['card-desc']}>
        This course covers the most basic concepts in programming using Solidity as an example.
      </div>

      <div className={`${styles['card-footer']}`}>
        <div className={`${styles['footer-flex']}`}>
          <div className={`${styles['footer-flex']}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 14C5.14346 14 3.36303 13.2625 2.05029 11.9497C0.737494 10.637 0 8.85649 0 7C0 5.14351 0.737494 3.36303 2.05029 2.05029C3.36298 0.737495 5.14351 0 7 0C8.85649 0 10.637 0.737495 11.9497 2.05029C13.2625 3.36298 14 5.14351 14 7C14 8.85649 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85649 14 7 14ZM7 0.583346C5.29826 0.583346 3.66602 1.25942 2.46278 2.46273C1.25947 3.66615 0.583396 5.29821 0.583396 6.99995C0.583396 8.70169 1.25947 10.3339 2.46278 11.5372C3.6662 12.7405 5.29826 13.4166 7 13.4166C8.70174 13.4166 10.334 12.7405 11.5372 11.5372C12.7405 10.3337 13.4166 8.70169 13.4166 6.99995C13.4166 5.29821 12.7405 3.66597 11.5372 2.46273C10.3338 1.25942 8.70174 0.583346 7 0.583346Z" fill="#F2F2F2" />
              <path d="M11.3756 7.58381H6.70883C6.5478 7.58381 6.41724 7.45325 6.41724 7.29222V2.6255C6.41724 2.46447 6.5478 2.3338 6.70883 2.3338C6.86997 2.3338 7.00053 2.46447 7.00053 2.6255V7.00047H11.3755C11.5365 7.00047 11.6672 7.13103 11.6672 7.29217C11.6672 7.4532 11.5366 7.58381 11.3756 7.58381Z" fill="#F2F2F2" />
            </svg>
            <span className={`${styles['footer-flex-text']}`}>36 hours</span>
          </div>

          <div className={`${styles['footer-flex']}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M7.57883 12.8638V2.04656C7.19876 0.856661 4.21427 0.919762 2.76953 1.10005V11.8186C6.08195 11.2105 7.35591 12.2621 7.57883 12.8638Z" stroke="#F2F2F2" strokeWidth="0.6" />
              <path d="M7.57791 12.8638V2.04656C7.95798 0.856661 10.9425 0.919762 12.3872 1.10005V11.8186C9.07478 11.2105 7.80083 12.2621 7.57791 12.8638Z" stroke="#F2F2F2" strokeWidth="0.6" />
              <path d="M2.75602 2.42981H1V13.6857L14.0904 13.9999V2.42981H12.3343" stroke="#F2F2F2" strokeWidth="0.6" />
              <path d="M7.56689 13.8968V12.6799" stroke="#F2F2F2" strokeWidth="0.6" />
            </svg>
            <span className={`${styles['footer-flex-text']}`}>5 Course</span>
          </div>


          <div className={`${styles['footer-flex']} ${styles['footer-btn']}`}>
            <img src="/images/Group.png" alt="" />
            <div className={`${styles['footer-flex-text-btn']}`}>
              45% COMPLETED
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
