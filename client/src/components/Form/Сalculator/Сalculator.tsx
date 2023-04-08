import React from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
//css
import styles from './Сalculator.module.scss'
//img
import swap from '../../../assets/svg/swap.svg'

export interface formInputs {
  cityFrom: string
  cityTo: string
  Bheight: number
  Bwidth: number
  Blenght: number
  Bsize: number
}

const Сalculator = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues
  } = useForm<formInputs>()

  const Submit = (data: formInputs) => {
    console.log(data)
  }

  const swapFun = () => {
    let from = getValues('cityFrom')
    let to = getValues('cityTo')
    reset({
      cityFrom: to,
      cityTo: from
    })
  }

  return (
    <form className={styles.cont} onSubmit={handleSubmit(Submit)}>
      <div className={styles.firstLine}>
        <div className={styles.inpEl}>
          <p>
            Город отправления<span>*</span>
          </p>
          <input
            type='text'
            placeholder='Укажите город отправления'
            {...register('cityFrom', { required: true })}
          />
        </div>
        <div className={styles.swap} onClick={swapFun}>
          <Image width={40} height={40} src={swap.src} alt='swap' />
        </div>
        <div className={styles.inpEl}>
          <p>
            Город назначения<span>*</span>
          </p>
          <input
            type='text'
            placeholder='Укажите город назначения'
            {...register('cityTo', { required: true })}
          />
        </div>
      </div>
      <div className={styles.secondLine}>
        <div className={styles.inpEl}>
          <p>
            Вес<span>*</span>
          </p>
          <input
            type='text'
            placeholder='Укажите вес(гр.)'
            {...register('Bsize', { required: true })}
          />
        </div>
        <div className={styles.inpEl}>
          <p>Длина</p>
          <input
            type='text'
            placeholder='Укажите длину(см)'
            {...register('Blenght', { required: true })}
          />
        </div>
      </div>
      <div className={styles.line}>
        <div className={styles.inpEl}></div>
        <div className={styles.inpEl}>
          <p>Ширина</p>
          <input
            type='text'
            placeholder='Укажите ширину(см)'
            {...register('Blenght', { required: true })}
          />
        </div>
      </div>
      <div className={styles.lastLine}>
        <div className={styles.buttons}>
          <button>Оформить</button>
          <button>Рассчитать</button>
        </div>
        <div className={styles.inpEl}>
          <p>Ширина</p>
          <input
            type='text'
            placeholder='Укажите ширину(см)'
            {...register('Blenght', { required: true })}
          />
        </div>
      </div>
    </form>
  )
}

export default Сalculator
// <button className={styles.form__button} type='submit'>
//   Оформить
// </button>
