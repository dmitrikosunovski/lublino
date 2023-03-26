import React, { FC, useState } from 'react'
import styles from './Select.module.scss'
import arrow from '../../../../assets/svg/arrow.svg'
import clsx from 'clsx'
import { UseFormRegister } from 'react-hook-form'
import { formInputs } from '../Сalculator'

interface selectProps {
  register: UseFormRegister<formInputs>
}

const Select: FC<selectProps> = ({ register }) => {
  const openSelect = () => {
    const selectHtml = document.getElementsByClassName(styles.select__wrapper)
    selectHtml[0].classList.toggle(styles.select__wrapper__active)
  }

  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className={styles.select}>
      <div className={styles.select__wrapper}>
        <div className={styles.select__header} onClick={openSelect}>
          <p>Размер отправления</p>
          <img src={arrow.src} alt='arrow' />
        </div>
        <div className={styles.select__tabs}>
          <div
            className={clsx(styles.select__tabs__el, {
              [styles.select__tabs__el__active]: activeTab === 0
            })}
            onClick={() => setActiveTab(0)}
          >
            Примерно
          </div>
          <div
            className={clsx(styles.select__tabs__el, {
              [styles.select__tabs__el__active]: activeTab === 1
            })}
            onClick={() => setActiveTab(1)}
          >
            Точные размеры
          </div>
        </div>
        <div className={styles.select__inputs}>
          <input
            type='text'
            placeholder='Высота, см'
            {...register('Bheight', { required: true })}
          />
          <input
            type='text'
            placeholder='Ширина, см'
            {...register('Bwidth', { required: true })}
          />
          <input
            type='text'
            placeholder='Длина, см'
            {...register('Blenght', { required: true })}
          />
          <input
            type='text'
            placeholder='Вес, кг'
            {...register('Bsize', { required: true })}
          />
        </div>
      </div>
    </div>
  )
}

export default Select
