import { Header } from '@/components/Header/Header'
import styles from './Index.module.scss'
import { FirstScreen } from '@/components/FirstScreen/FirstScreen'
import Form from '@/components/Form/Form'
import { MapScreen } from '@/components/MapScreen/MapScreen'

export default function Home() {
  return (
    <div>
      <div>
        <Header />
        <FirstScreen />
        <div className={styles.formcont}>
          <div>
            <Form />
          </div>
        </div>
        <MapScreen />
      </div>
    </div>
  )
}
