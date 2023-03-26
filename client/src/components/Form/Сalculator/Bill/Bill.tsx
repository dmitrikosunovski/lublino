import React from 'react'
//styles
import styles from './Bill.module.scss'
//img
import arrow from '../../../../assets/svg/arrowR.svg'

const Bill = () => {
  return (
    <div className={styles.cont}>
      <p className={styles.title}>Ваш расчет</p>
      <div className={styles.path}>
        <div className={styles.path__el}>Москва</div>
        <img src={arrow.src} />
        <div className={styles.path__el}>Санкт-Петербург</div>
      </div>
      <div className={styles.info}>
        <div>Размер:</div>
        <div>Доставка:</div>
        <div>Тариф:</div>
      </div>
      <div className={styles.footer}>Итого:</div>
    </div>
  )
}

export default Bill
