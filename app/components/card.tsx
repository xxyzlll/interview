"use client";
import styles from "../styles/card.module.css";

interface Options {
  showFooter?: boolean
  showHeadRect?: boolean
  showButton?: boolean
  showInfo?: boolean
  bgRectImage?:string
  rectBgColor?: string
  bgImage?: string
}

interface Prop {
  title: string
  tags: string[]
  content?: string
  options: Options
}

export default function Card(props: Prop) {
  return (
    <div className={styles.main}>
      <div className={styles['rect-first-bg']}  style={{ background: `url('${props.options.bgRectImage}') no-repeat`}}></div>
      <div className={`${styles.container} `} style={{ background: `url('${props.options.bgImage}') no-repeat`}}>
      {props.options.showHeadRect &&
        <div className={styles['rect-line']}
          style={{ background: props.options.rectBgColor }} />}

      <div className={styles['card-title']}>{props.title}</div>
      <div className={styles['card-tag']}>
        {
          props.tags.map((item, index) => {
            return (
              <div className={styles['card-begin']} key={index}>{item}</div>
            )
          })
        }
      </div>

      {props.content && <div className={styles['card-desc']}>
        {props.content}
      </div>}

      {props.options.showInfo &&
        <div className={styles.info}>
          <div className={styles['info-box']}>
            <span>Signup</span>
            <span>4/15 - 6/15</span>
          </div>
          <div className={styles['info-box']}>
            <span>Event</span>
            <span>6/15 - 7/15</span>
          </div>
          <div className={styles['info-box']}>
            <span>Grant size</span>
            <span>200K</span>
          </div>

        </div>
      }

      {props.options.showFooter && <div className={`${styles['card-footer']}`}>
        <div className={`${styles['footer-flex']}`}>
          <div className={`${styles['footer-flex']}`}>
            <img src="/svg/clock.svg" />
            <span className={`${styles['footer-flex-text']}`}>36 hours</span>
          </div>

          <div className={`${styles['footer-flex']}`}>
            <img src="/svg/book.svg" alt="" />
            <span className={`${styles['footer-flex-text']}`}>5 Course</span>
          </div>

          {props.options.showButton && <div className={`${styles['footer-flex']} ${styles['footer-btn']}`}>
            <img src="/images/Group.png" />
            <div className={`${styles['footer-flex-text-btn']}`}>
              45% COMPLETED
            </div>
          </div>}

        </div>
      </div>}
    </div>
    </div >
  );
}
