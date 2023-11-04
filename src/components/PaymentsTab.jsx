import React, {useState} from 'react';
import styles from './PaymentsTab.module.css';
import logout from './../images/iconLogout.svg'

const PaymentsTab = (props) =>
{  
    return(
        <div className={styles.component}>
            <div className={styles.wrapper}>
                <div className={styles.balance}>
                    <p>Баланс на платформе</p> 570тенге
                </div>
            </div>
                <div className={styles.subscription}>
                    <div className="textPart">
                        <div className={styles.subHeader}>
                            <h2>Неограниченный доступ </h2> <span>Активировано</span>
                        </div>
                        <p>Доступ к полной  контактной информации </p>
                        <p>Доступ к грузам,транспорту,неограниченное добавление позиций</p>
                    </div>
                    <button>Подписаться</button>
                </div>
                <div className={styles.paymentHistory}>
                    <div className={styles.paymentHeader}>
                        <h2>История платежей</h2>
                        <p>История платежей достуна на 24 месяца</p>
                    </div>
                    <div className={styles.paymentItem}>
                        <div className={styles.left}><h2>18 Сентября  -  17 Октября</h2></div>
                        <div className={styles.right}>
                            <h2>11,990 Тенге</h2>
                            <p>Оплачено : 18.09.2023</p>
                        </div>
                    </div>
                    <div className={styles.paymentItem}>
                        <div className={styles.left}><h2>17 Августа  -  18 Сентября</h2></div>
                        <div className={styles.right}>
                            <h2>11,990 Тенге</h2>
                            <p>Оплачено : 17.08.2023</p>
                        </div>
                    </div>
                    <div className={styles.paymentItem}>
                        <div className={styles.left}><h2>12 Июня  -  12 Июля</h2></div>
                        <div className={styles.right}>
                            <h2>11,990 Тенге</h2>
                            <p>Оплачено : 12.06.2023</p>
                        </div>
                    </div>
                    <div className={styles.paymentItem}>
                        <div className={styles.left}><h2>12 Мая  -  12 Июня</h2></div>
                        <div className={styles.right}>
                            <h2>11,990 Тенге</h2>
                            <p>Оплачено : 12.06.2023</p>
                        </div>
                    </div>
                    <button>
                        <p>Развернуть</p>
                    </button>
                </div>
        </div>
    );
}

export default PaymentsTab;