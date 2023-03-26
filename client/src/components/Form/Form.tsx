import React from 'react'
//styles
import styles from './Form.module.scss'
//components
import Tabs from './Tabs/Tabs'
import Сalculator from './Сalculator/Сalculator'




const Form = () => {

  return (
    <div className={styles.cont}>
      <Tabs />
      <Сalculator/>
    </div>
  )
}

export default Form
