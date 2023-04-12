import React, { ChangeEvent, FC, useState } from 'react'
import styles from './Track.module.scss'
import search from '../../../assets/svg/search.svg'
import { handleFormProps } from '../Form'
import clsx from 'clsx'
import getStatusGET from '@/Components/FirstScreen/getStatusGET'
import DileveryList from './DileveryList'

interface Tracker {
  vvv?: () => void,
  handleChange: () => void,
  isSearch: any,
  some: []
}

const Track: FC<Tracker> = ({ vvv, handleChange, isSearch, some }) => {

  return (
    <div>
      <div className={clsx(styles.cont, { [styles.cont_mod]: isSearch })}>
        <p className={styles.title}>
          Укажите номер заказа<span>*</span>
        </p>
        <form className={styles.search}>
          <div className={styles.search__input}>
            <img src={search.src} alt='search' />
            <input
              type='text'
              placeholder='Номер заказа'
              onChange={handleChange}
            />
          </div>
          <button
            className={styles.search__button}
            type='button'
            onClick={() => vvv?vvv():''}
          >
            Отследить
          </button>
        </form>
      </div>
      {some?.join('')?.length > 0 && (
        <DileveryList some={some} />
      )}
    </div>
  )
}

export default Track
