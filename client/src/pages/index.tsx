import { Header } from '@/components/Header/Header'
import styles from './Index.module.scss'
import { FirstScreen } from '@/components/FirstScreen/FirstScreen'
import Form from '@/components/Form/Form'
import { MapScreen } from '@/components/MapScreen/MapScreen'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <div>
      <Header />
      <FirstScreen />
      <div className={styles.formcont}>
        <div>
          <Form />
        </div>
      </div>
      <MapScreen />
      <Footer />
    </div>
  )
}
