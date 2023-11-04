import React, {useState} from 'react';
import styles from "./FixedPart.module.css";
import logout from './../images/iconLogout.svg';
import { BrowserRouter as Router, Route, NavLink, Switch, BrowserRouter } from 'react-router-dom';

const FixedPart = (props) =>
{
    return (
            <div className={styles.fixedPart}>
                <div className={styles.header}>
                    <h1>Личный Кабинет</h1>
                    <div className={styles.quit}>
                        <button> <img src={logout} alt="" /> Выйти</button>
                    </div>
                </div>
                <div className={styles.navbar}>
                        <button id={styles.active}>Компания</button>
                        <button>Профиль</button>
                        <button>Платежи</button>
                </div>
            </div>
    );
}

export default FixedPart;