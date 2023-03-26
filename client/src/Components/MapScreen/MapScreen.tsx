import Image from 'next/image';
import styles from './MapScreen.module.scss';

export const MapScreen = () => {
    return (
    <div className={styles.container}>
        <div>
            <div className={styles.title}>Мы можем доставить</div>
            <div className={styles.title}>что угодно, куда угодно</div>
            <div className={styles.sub}>
            <div className={styles.subtitle}>Доставляем по всей России</div>
            </div>
            <div className={styles.cities}>
            <div className={styles.subtitle}>Москва, Санкт-Петербург, Новосибирск,</div>
            <div className={styles.subtitle}>Владивосток, Екатеринбург</div>
            </div>
        </div>
    <div>
    <Image
        src="/map.png"
        alt="Map"
        width={783}
        height={526}
        priority
      />
    </div>
    </div>
    )
}