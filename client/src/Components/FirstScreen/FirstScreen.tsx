import styles from './FirstScreen.module.scss'

export const FirstScreen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <div className={styles.blockLeft}>
          <div>
            <div className={styles.title}>Курьерская служба</div>
            <div className={styles.title}>доставки Люблино</div>
          </div>
          <div className={styles.subtitle}>Отправляй и получай!</div>
          <div>
            <button className={styles.btn}>Заказать</button>
          </div>
        </div>
        <div className={styles.blockRight}>
          <div className={styles.track}>Номер заказа</div>
          <div className={styles.trackInput}>
            <input type='text' placeholder='Введите номер заказа' />
          </div>
          <div>
            <button className={styles.btn}>Отследить</button>
          </div>
        </div>
      </div>
    </div>
  )
}
