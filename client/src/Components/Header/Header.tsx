import { MailIcon } from '../Icons/MailIcon';
import styles from './Header.module.scss';
import Image from 'next/image'

export const Header = () => {
    return (
       <div className={styles.container}>
        <div className={styles.topHeader}>
            <div className={styles.logocont}>
            <Image
                src="/logo.png"
                alt="Logo"
                className={styles.logo}
                width={350}
                height={110}
                priority
              />
            </div>
            <div className={styles.rightcont}>
                <div className={styles.contacts}>
                <div className={styles.conttext}><h2>+7 (901) 719 96 11</h2></div>
                <div className={styles.line}></div>
                <div className={styles.conttext1}><MailIcon/><h3>contact@lublinoexpress.ru</h3></div>
                </div>
            </div>
        </div>
        <div className={styles.lowHeader}>
            <div className={styles.lowHeaderText}>Главная</div>
            <div className={styles.lowHeaderText}>Калькулятор</div>
            <div className={styles.lowHeaderText}>Отследить посылку</div>
            <div className={styles.lowHeaderText}>Документы</div>
        </div>
       </div> 
    )
}