import { ChangeEvent, FC, useState } from 'react'
import styles from './FirstScreen.module.scss'
import { OtherService } from '../../../services/other/other.service'
import getStatusGET from './getStatusGET'

interface Tracker {
  vvv: () => void,
  handleChange: any,
}

export const FirstScreen: FC<Tracker> = ({ vvv, handleChange }) => {

  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <div className={styles.blockLeft}>
          <div>
            <div className={styles.title}>Курьерская служба</div>
            <div className={styles.title}>доставки Люблино</div>
          </div>
          <div className={styles.subtitle}>Отправляй и получай!</div>
          <div>
            <button className={styles.btn}>Заказать</button>
          </div>
        </div>
        <div className={styles.blockRight}>
          <div className={styles.track}>Номер заказа</div>
          <div className={styles.trackInput}>
            <input type='text' placeholder='Введите номер заказа' onChange={handleChange} />
          </div>
          <div>
            <button className={styles.btn} onClick={() => vvv()}>Отследить</button>
          </div>
        </div>
      </div>
    </div>
  )
}

