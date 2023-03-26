import React, { useState } from 'react'
import styles from './Tabs.module.scss'
import clsx from 'clsx'

const Tabs = () => {
  const [isActiveTab, setIsActiveTab] = useState(1)

  return (
    <div className={styles.cont}>
      <div
        className={clsx(styles.tab, { [styles.active]: isActiveTab === 1 })}
        onClick={() => setIsActiveTab(1)}
      >
        Калькулятор
      </div>
      <div
        className={clsx(styles.tab, { [styles.active]: isActiveTab === 2 })}
        onClick={() => setIsActiveTab(2)}
      >
        Отслеживание
      </div>
    </div>
  )
}

export default Tabs
