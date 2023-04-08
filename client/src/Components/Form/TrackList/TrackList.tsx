import React from 'react'
import styles from './TrackList.module.scss'

const TrackList = () => {
  return (
    <div className={styles.cont}>
      <div className={styles.el}>
        <p>Дата</p>
        <p>Статус</p>
        <p>Город</p>
      </div>
      <div className={styles.el}>
        <p>06.04.2023 11:47</p>
        <p>Доставлен</p>
        <p>Санкт-Петербург</p>
      </div>
      <div className={styles.el}>
        <p>06.04.2023 11:47</p>
        <p>Доставлен</p>
        <p>Санкт-Петербург</p>
      </div>
      <div className={styles.el}>
        <p>06.04.2023 11:47</p>
        <p>Принят на склад до востребования</p>
        <p>Санкт-Петербург</p>
      </div>
    </div>
  )
}

export default TrackList
