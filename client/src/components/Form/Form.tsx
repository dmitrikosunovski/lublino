import React, { useState } from 'react'
//styles
import styles from './Form.module.scss'
//components
import Tabs from './Tabs/Tabs'
import Track from './Track/Track'
import Сalculator from './Сalculator/Сalculator'
import Account from './Account/Account'
import TrackList from './TrackList/TrackList'

export interface handleFormProps {
  name: 'account' | 'search'
  number?: string
}

const Form = () => {
  const [path, setPath] = useState(1)
  const [isAccount, setIsAccount] = useState(false)
  const [isSearch, setIsSearch] = useState(false)

  const handleForm = ({ name, number }: handleFormProps) => {
    if (name === 'account') {
      setIsSearch(false)
      setIsAccount(true)
    } else {
      setIsAccount(false)
      setIsSearch(true)
      if (number) {
        console.log(number)
      }
    }
  }

  const getSubContent = () => {
    if (isAccount && path === 0) {
      return <Account />
    } else if (isSearch && path === 1) {
      return <TrackList />
    }
  }

  return (
    <div className={styles.cont}>
      <Tabs setPath={setPath} path={path} />
      {path === 0 ? (
        <Сalculator handleForm={handleForm} />
      ) : (
        <Track handleForm={handleForm} />
      )}
      {getSubContent()}
    </div>
  )
}

export default Form
