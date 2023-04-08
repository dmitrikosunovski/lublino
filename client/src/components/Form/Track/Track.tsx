import React from 'react'
import styles from './Track.module.scss'
import search from '../../../assets/svg/search.svg'
import PathList from './PathList/PathList'

const Track = () => {
  const copy = (e: any) => {
    navigator.clipboard.writeText(e.target.innerText)
  }

  return (
    <div>
      <div className={styles.cont}>
        <form className={styles.search}>
          <div className={styles.search__input}>
            <img src={search.src} alt='search' />
            <input type='text' placeholder='Номер заказа' />
          </div>
          <button className={styles.search__button}>Отследить</button>
        </form>
        <div className={styles.listId}>
          <p onClick={(e) => copy(e)}>201892902920002</p>
          <p onClick={(e) => copy(e)}>201892902920002</p>
        </div>
      </div>
      <PathList />
    </div>
  )
}

export default Track