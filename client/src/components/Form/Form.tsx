import React, { useState } from 'react'
//styles
import styles from './Form.module.scss'
//components
import Tabs from './Tabs/Tabs'
import Track from './Track/Track'
import Сalculator from './Сalculator/Сalculator'

const Form = () => {
  const [path, setPath] = useState(0)

  return (
    <div className={styles.cont}>
      <Tabs setPath={setPath} path={path}/>
      <Сalculator />
      <Track />
    </div>
  )
}

export default Form
