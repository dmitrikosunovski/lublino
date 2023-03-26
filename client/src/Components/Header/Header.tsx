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
                <div className={styles.conttext}>+7 901 719 96 11</div>
                <div className={styles.conttext}>contact@lublinoexpress.ru</div>
                </div>
                <div>
                    <button className={styles.btn}>Войти</button>
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