import React from 'react'
import styles from './Account.module.scss'

const Account = () => {
  return (
    <div className={styles.cont}>
      <div className={styles.info}>
        <div className={styles.info__el}>
          <p>Вес: </p>
          <p>1360г.</p>
        </div>
        <div className={styles.info__el}>
          <p>Размер:</p>
          <p>20х30х10см</p>
        </div>
        <div className={styles.info__el}>
          <p>Стоимость*:</p>
          <p>1045 ₽</p>
        </div>
        <div className={styles.info__el}>
          <p>Срок доставки:</p>
          <p>10 дней</p>
        </div>
      </div>
      <p>
        * - Стоимость является ориентировочной. Точная стоимость будет
        рассчитана при физической сдаче заказа
      </p>
    </div>
  )
}

export default Account
