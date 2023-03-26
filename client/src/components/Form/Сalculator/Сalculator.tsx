import React from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
//components
import Select from './Select/Select'
//css
import styles from './Сalculator.module.scss'
//img
import swap from '../../../assets/svg/swap.svg'
import Bill from './Bill/Bill'

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
    <div className={styles.formCont}>
      <form className={styles.form} onSubmit={handleSubmit(Submit)}>
        <div className={styles.form__inputs}>
          <div className='flex flex-col'>
            <input
              type='text'
              placeholder='Город отправления'
              {...register('cityFrom', { required: true })}
            />
            <div className={styles.swapCont}>
              <div className={styles.swapCont__el} onClick={swapFun}>
                <Image width={64} height={64} src={swap.src} alt='swap' />
              </div>
            </div>
            <input
              type='text'
              placeholder='Город назначения'
              {...register('cityTo', { required: true })}
            />
          </div>
          <Select register={register} />
        </div>
        <button className={styles.form__button} type='submit'>
          Оформить
        </button>
      </form>
      <Bill/>
    </div>
  )
}

export default Сalculator
