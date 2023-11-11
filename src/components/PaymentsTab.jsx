import React, {useState} from 'react';
import styles from './PaymentsTab.module.css';
import logout from './../images/iconLogout.svg'
import { useTransition, animated } from 'react-spring';

const PaymentsTab = (props) =>
{  
    const [wrapUnwrap, setWrapUnwrap] = useState([]);
    function wrapUnwrapItems()
    {
        setWrapUnwrap((v) => (v.length ? [] : [
            {y:0, delay: 200, delayOff: 800},
            {y:0, delay: 400, delayOff: 600},
            {y:0, delay: 600, delayOff: 400},
            {y:0, delay: 800, delayOff: 200}
        ]));
    }
    const transition = useTransition(wrapUnwrap, {
        from: {x:0, y:100, opacity: 0}, 
        enter: item => (next) => next({x:0, y: item.y, opacity: 1, delay: item.delay}),
        leave: item => (next) => next({x:0, y:100, opacity: 0, delay: item.delayOff})
    });

    return(
        <div className={styles.component}>
            <div className={styles.wrapper}>
                <div className={styles.balance}>
                    <p>Баланс на платформе</p> <span>570тенге</span>
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
                        <p className={styles.mobileRemoveText}>История платежей достуна на 24 месяца</p>
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
                    {transition((styleItem, item) => (
                        item ? (
                            <animated.div className={styles.paymentItem} style={styleItem}>
                                <div className={styles.left}><h2>12 Мая  -  12 Июня</h2></div>
                                <div className={styles.right}>
                                    <h2>11,990 Тенге</h2>
                                    <p>Оплачено : 12.06.2023</p>
                                </div>
                            </animated.div>
                        ):('')
                    ) )}
                    <button onClick={wrapUnwrapItems}>
                        <p>{wrapUnwrap.length ? "Свернуть":"Развернуть"}</p>
                    </button>
                    <p className={styles.mobileText}>История платежей достуна на 24 месяца</p>
                </div>
        </div>
    );
}

export default PaymentsTab;