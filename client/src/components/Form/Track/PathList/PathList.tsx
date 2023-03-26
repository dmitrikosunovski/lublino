import clsx from 'clsx'
import React from 'react'
import styles from './PathList.module.scss'
const PathList = () => {
  return (
    <div className={styles.cont}>
      <div className={styles.el}>
        <div className={styles.circle}></div>
        <p>Покинул склад, Москва</p>
      </div>
      <div className={styles.el}>
        <div className={styles.circle}></div>
        <p>Прибыл в СЦ, Бологое</p>
      </div>
      <div className={styles.el}>
        <div className={styles.circle}></div>
        <p>Прибыл в город получения, Санкт-Петербург</p>
      </div>
      <div className={styles.el}>
        <div className={clsx(styles.circle, styles.onWay)}></div>
        <p>Прибыл в пункт выдачи, Санкт-Петербург, ул. Декабристов, д. 12</p>
      </div>
    </div>
  )
}

export default PathList
