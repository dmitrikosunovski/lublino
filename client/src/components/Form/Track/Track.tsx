import React, { useState } from 'react'
import styles from './Track.module.scss'
import search from '../../../assets/svg/search.svg'
import { handleFormProps } from '../Form'

interface TrackProps {
  handleForm: (data: handleFormProps) => void
}

const Track: React.FC<TrackProps> = ({ handleForm }) => {
  const [track, setTtrack] = useState('')

  return (
    <div className={styles.cont}>
      <p className={styles.title}>
        Укажите номер заказа<span>*</span>
      </p>
      <form className={styles.search}>
        <div className={styles.search__input}>
          <img src={search.src} alt='search' />
          <input
            type='text'
            placeholder='Номер заказа'
            value={track}
            onChange={(e) => setTtrack(e.target.value)}
          />
        </div>
        <button
          className={styles.search__button}
          type='button'
          disabled={track == ''}
          onClick={() => handleForm({ name: 'search', number: track })}
        >
          Отследить
        </button>
      </form>
    </div>
  )
}

export default Track
