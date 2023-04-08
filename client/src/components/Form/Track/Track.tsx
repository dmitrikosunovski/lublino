import React from 'react'
import styles from './Track.module.scss'
import search from '../../../assets/svg/search.svg'

const Track = () => {

  return (
    <div className={styles.cont}>
      <p className={styles.title}>
        Укажите номер заказа<span>*</span>
      </p>
      <form className={styles.search}>
        <div className={styles.search__input}>
          <img src={search.src} alt='search' />
          <input type='text' placeholder='Номер заказа' />
        </div>
        <button className={styles.search__button}>Отследить</button>
      </form>
    </div>
  )
}

export default Track
