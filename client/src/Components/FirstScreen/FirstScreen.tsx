import styles from './FirstScreen.module.scss'

export const FirstScreen = () => {
    return (
        <div className={styles.container}>
            <div>
                <div>
                <div className={styles.title}>Курьерская служба</div>
                <div className={styles.title}>доставки Люблино</div>
                </div>
                <div className={styles.subtitle}>
                    <div>Отправляй и получай!</div>
                </div>
                <div>
                    <button className={styles.btn}>Заказать</button>
                </div>
            </div>
        </div>
    )
}