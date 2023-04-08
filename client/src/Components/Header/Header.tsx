import Link from 'next/link'
import styles from './Header.module.scss'
import Image from 'next/image'
import info from '../../assets/png/info.png'

export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topHeader}>
        <Image
          src='/logo.png'
          alt='Logo'
          width={327}
          height={98}
          priority
          className={styles.logo}
        />
        <Image
          src={info.src}
          width={287}
          height={82}
          alt='info'
          className={styles.info}
        />
      </div>
      <div className={styles.lowHeader}>
        <Link href={'#'} className={styles.lowHeaderText}>
          Главная
        </Link>
        <Link href={'#'} className={styles.lowHeaderText}>
          Калькулятор
        </Link>
        <Link href={'#'} className={styles.lowHeaderText}>
          Отследить посылку
        </Link>
        <Link href={'#'} className={styles.lowHeaderText}>
          Документы
        </Link>
      </div>
    </div>
  )
}
