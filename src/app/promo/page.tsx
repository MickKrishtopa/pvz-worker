import styles from './page.module.scss';

export default function Promo() {
    return (
        <main className={styles.promo}>
            <div className={styles['promo__title-area']}>
                <h2>
                    Этот сервис разработан для поиска работы <br />в пунктах
                    выдачи заказов
                </h2>
                <p>
                    Оператор в ПВЗ это не просто сотрудник, это ПОМОЩНИК,
                    который помогает развивать пункты выдачи, оказывать
                    клиентский сервис, а также является помощником для клиентов.
                </p>
            </div>

            <div className={styles['promo__register-area']}>
                <h2>Я хочу найти</h2>
                <div className={styles['promo__button-area']}>
                    <button className={styles['promo__finde-work-btn']}>
                        Работу
                    </button>
                    <button className={styles['promo__finde-worker-btn']}>
                        Сотрудника
                    </button>
                </div>
            </div>
        </main>
    );
}
