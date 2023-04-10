import { Header } from '../Components/Header/Header'
import { FirstScreen } from '../Components/FirstScreen/FirstScreen'
import Form from '../Components/Form/Form'
import { MapScreen } from '../Components/MapScreen/MapScreen'
import Footer from '../Components/Footer/Footer'
import { ChangeEvent, useState } from 'react'
import getStatusGET from '@/Components/FirstScreen/getStatusGET'

export default function Home() {
  const [number, setNumber] = useState('')
  const [some, setSome] = useState()
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value)
  }

  const vvv = () => {
    getStatusGET(number).then((data) => {
      setSome(data)
    })
  }

  console.log(some)
  return (
    <div>
      <Header />
      <FirstScreen vvv={vvv} handleChange={handleChange}/>
      <Form vvv={vvv} handleChange={handleChange} some={some} />
      <MapScreen />
      <Footer />
    </div>
  )
}
