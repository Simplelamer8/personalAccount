import React, {useState} from 'react';
import styles from './CompanyTab.module.css';
import logout from './../images/iconLogout.svg';

const PersonalAccount = (props) =>
{
    const [fileName1, setFileName1] = useState(null);
    const [buttonVal, setButtonValue] = useState("Загрузить");
    
    function handleButtonValue(event)
    {
        setButtonValue("Загрузить Другое");
    }

    function handleFileChange(event)
    {
        const selectedFile = event.target.files[0];
        setFileName1(selectedFile);
    }

    return(
        <div className={styles.mainContent}>
            <table>
                <tr>
                    <td><p>Дата Регистрации*</p></td>
                    <td><p>31.10.23</p></td>
                </tr>
                <tr>
                    <td><p>Основная деятельность*</p></td>
                    <td><p>Грузоперевозчик/Логист/Грузовладелец</p></td>
                </tr>
                <tr>
                    <td><p>Дата Регистрации организации*</p></td>
                    <td><p>31.10.2023</p></td>
                </tr>
                <tr>
                    <td><p>БИН/ИИН*</p></td>
                    <td><p>000101500500</p></td>
                </tr>
                <tr>
                    <td><p>Официальное название организации*</p></td>
                    <td><p>ТОО “Рога и Копыта”</p></td>
                </tr>
                <tr>
                    <td><p>Свидетельство о гос. регистрации.</p></td>
                    <td>
                        <form className={styles.tableLastElement}>
                            <div className={styles.fileName}>{fileName1 && <p>{fileName1.name}</p>}</div>
                            <label htmlFor={styles.fileUpload}>
                                <div className={styles.selectFile} onClick={handleButtonValue}>{buttonVal}</div>
                            </label>
                            <input type="file" onChange={handleFileChange} id={styles.fileUpload}></input>
                        </form>
                    </td>
                    <td></td>
                </tr>
            </table>
        </div>
    );
}

export default PersonalAccount;