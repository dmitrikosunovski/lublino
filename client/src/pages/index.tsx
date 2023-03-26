import { FirstScreen } from "@/Components/FirstScreen/FirstScreen";
import { Header } from "@/Components/Header/Header";
import { MapScreen } from "@/Components/MapScreen/MapScreen";
import Form from "@/Components/Form/Form";
import styles from './Index.module.scss'

export default function Home() {
  return (
    <div>
    <div>
    <Header />
    <FirstScreen />
    <div className={styles.formcont}>
      <div>
      <Form/>
      </div>
    </div>
    <MapScreen />
    </div>
    </div>
  )
}
