import { Header } from '@/components/Header/Header'
import { FirstScreen } from '@/components/FirstScreen/FirstScreen'
import Form from '@/components/Form/Form'
import { MapScreen } from '@/components/MapScreen/MapScreen'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <div>
      <Header />
      <FirstScreen />
      <Form />
      <MapScreen />
      <Footer />
    </div>
  )
}
