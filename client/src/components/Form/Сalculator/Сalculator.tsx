import React, { useCallback, useState } from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
//css
import styles from './Сalculator.module.scss'
//img
import swap from '../../../assets/svg/swap.svg'
import { handleFormProps } from '../Form'
import clsx from 'clsx'
import { useMutation, useQueryClient } from 'react-query'
import { OtherService } from '../../../../services/other/other.service'
import { queryClient } from '../../../../utils/react-query'

export interface formInputs {
  cityFrom: string
  cityTo: string
  cityFromIndex: string
  cityToIndex: string
  insurance: string
  Bheight: number
  Bwidth: number
  Blenght: number
  Bsize: number
}

interface СalculatorProps {
  handleForm: (data: handleFormProps) => void
  isAccount:boolean
}

const Сalculator: React.FC<СalculatorProps> = ({ handleForm, isAccount }) => {
  const queryClient = useQueryClient()
  const [goo, setGoo] = useState({height: 0, length: 0, width: 0, weight: 0})

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues
  } = useForm();

  const changeHandler = useCallback(
    (e) => {
      setGoo((prev) => ({
        ...prev,
        [e.target.name]: e.target.value
      }))
    },
    [goo]
  )

  const { mutate } = useMutation(
    'create-calkulator',
    (data) =>
      OtherService.postCalcone({
        //@ts-ignore
        estimatedCost: data.insurance,
        //@ts-ignore
        receiverIndex: data.cityToIndex,
        //@ts-ignore
        senderIndex: data.cityToIndex,
        //@ts-ignore
        receiverAddress: data.cityTo,
        //@ts-ignore
        cityname: data.cityFrom,
        goods: [goo]
      }),
    {
      onSuccess(data) {
        queryClient.invalidateQueries({ queryKey: [`calkulator`] })
      },
      onError(data: any) {
        console.log('errrroorrr')
      }
    }
  )

  const Submit = (data: any) => {
    mutate(data)
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
    <form className={clsx(styles.cont,{[styles.cont_mod]:isAccount})} onSubmit={handleSubmit(Submit)}>
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
      <div className={styles.firstLine}>
        <div className={styles.inpEl}>
          <p>
            Индекс отправления<span>*</span>
          </p>
          <input
            type='text'
            placeholder='Укажите индекс отправления'
            {...register('cityFromIndex', { required: true })}
          />
        </div>
        <div className={styles.inpEl}>
          <p>
            Индекс назначения<span>*</span>
          </p>
          <input
            type='text'
            placeholder='Укажите индекс назначения'
            {...register('cityToIndex', { required: true })}
          />
        </div>
      </div>
      <div className={styles.firstLine}>
        <div className={styles.inpEl1}>
          <p>
            Страховка<span>*</span>
          </p>
          <input
            type='text'
            placeholder='Укажите Страховку'
            {...register('insurance', { required: true })}
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
            onChange={changeHandler}
            value={goo.weight}
            name="weight"
          />
        </div>
        <div className={styles.inpEl}>
          <p>Длина</p>
          <input
            type='text'
            placeholder='Укажите длину(см)'
            {...register('Blenght', { required: true })}
            onChange={changeHandler}
            value={goo.length}
            name="length"
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
            {...register('Bwidth', { required: true })}
            onChange={changeHandler}
            value={goo.width}
            name="width"
          />
        </div>
      </div>
      <div className={styles.lastLine}>
        <div className={styles.buttons}>
          <button type='submit'>Оформить</button>
          <button type='button'>
            Рассчитать
          </button>
        </div>
        <div className={styles.inpEl}>
          <p>Высота</p>
          <input
            type='text'
            placeholder='Укажите высоту(см)'
            {...register('Bheight', { required: true })}
            onChange={changeHandler}
            value={goo.height}
            name="height"
          />
        </div>
      </div>
    </form>
  )
}

export default Сalculator
