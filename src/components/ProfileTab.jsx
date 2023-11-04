import React, {useState} from 'react';
import styles from './ProfileTab.module.css';
import logout from './../images/iconLogout.svg'

const ProfileTab = (props) =>
{  
    const [isEditMode, setIsEditMode] = useState(false);
    const [isPasswordEditMode, setIsPasswordEditMode] = useState(false);
    const [passwordInputs, setPasswordInputs] = useState({
        password:"",
        newPassword:"",
        confirmPassword:""
    })

    let turnPassword = false;

    const [passwordColumn1, setPasswordColumn1] = useState({
        password:"Cтарый пароль*",
        newPassword:"Новый пароль*",
        confirmPassword:"Подтверждение нового пароля*"
    })

    //rewrite the array into ONE large object

    const [column1, setColumn1] = useState(
        {name: "Имя",
        surname: "Фамилия",
        phoneNumber: "Номер телефона",
        email: "Email",
        visiblePhoneNumer: "Отображаемый номер телефона",
        whattsapp: "Номер телефона WhatsApp"}
    );

    const [column2, setColumn2] = useState(
        {name: "Азамат",
        surname: "Беркимбаев",
        phoneNumber: "+77476023694",
        email: "azamat.berkimbayev@alumni.nu.edu.kz",
        visiblePhoneNumer: "+77476023694",
        whattsapp: "+77476023694"}
    );

    let column1Arr = Object.keys(column1);
    let column2Arr = Object.keys(column2);
    let password1 = Object.keys(passwordColumn1);
    let password2 = Object.keys(passwordInputs);

    function handlePasswordChange()
    {
        if (passwordInputs.newPassword.localeCompare(passwordInputs.confirmPassword) !== 0)
        {
            alert("Подтверждение пароля не совпадает новому")
            return;
        }
        if (passwordInputs.password == "" && isPasswordEditMode === true)
        {
            turnPassword = true;
            alert("Введите старый пароль")
            return;
        }
        if (passwordInputs.newPassword == "" && isPasswordEditMode === true)
        {
            alert("Поле нового пароля не заполнена");
            return;
        }
        if (passwordInputs.confirmPassword == "" && isPasswordEditMode === true)
        {
            alert("Поле подтверждения пароля не заполнена");
            return;
        }
        setIsPasswordEditMode((prevMode) => !prevMode);
    }

    function handlePasswordInputChange(e, inputName) {
        let obj = passwordInputs;
        obj[inputName] = e.target.value;
        setPasswordInputs({...passwordInputs, obj});
      }
      

    const handleEditMode = () =>
    {
        setIsEditMode((prevMode) => !prevMode);
    };

    const handleInputChange = (event, id) =>
    {
        let obj = column2;
        obj[id] = event.target.value;
        setColumn2({...column2, obj});
    }

    return(//use as less div's as possible! HTML takes more than CSS code
    //padding margin 50px
        <div className={styles.component}>
            <div className={styles.wrapper}>
                <div className={styles.mainContent}>
                    <table>
                        <tbody>
                            {
                                isEditMode?(
                                column1Arr.map((index) => (
                                    <tr>
                                       <td>{column1[index]}</td>
                                       <input onChange={(e) => (handleInputChange(e, index))} value={column2[index]} />
                                    </tr>
                                )))
                                :
                                (
                                    column1Arr.map((index) => (
                                        <tr>
                                            <td>{column1[index]}</td>
                                            <td>{column2[index]}</td> 
                                        </tr>
                                    ))
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <button className={styles.edit} onClick={handleEditMode}>{isEditMode ? "Сохранить" : "Изменить"}</button>
            </div>
            <div className={styles.changePassword}>
                <table>
                    <tbody>
                        {
                            isPasswordEditMode ? (
                            password1.map((index) => (
                                <tr>
                                   <td>
                                        <p>{passwordColumn1[index]}</p>
                                    </td> 
                                    <td>
                                        <input type="password" onChange={(e) => (handlePasswordInputChange(e, index))} value={passwordInputs[index]}/>
                                    </td>
                                </tr>
                            )))
                            :(
                                <div></div>
                            )
                        }
                    </tbody>
                </table>
                <button onClick={handlePasswordChange}>
                    {isPasswordEditMode?"Сохранить":"Изменить пароль"}
                </button>
            </div>
        </div>
    );
}

export default ProfileTab;