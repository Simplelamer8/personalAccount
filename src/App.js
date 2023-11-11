import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import PersonalAccount from './components/CompanyTab';
import FixedPart from './components/FixedPart';
import ProfileTab from './components/ProfileTab';
import PaymentsTab from './components/PaymentsTab'
import { BrowserRouter as Router, Route, NavLink, Switch, BrowserRouter } from 'react-router-dom';
import YourComponent from './components/experiement';
import logout from './images/iconLogout.svg';
import axios from 'axios';

function App() {
  const [mainInfo, setMainInfo] = useState(<PersonalAccount/>);
  const [navbarButtons, setNavbarButtons] = useState({
    first: "Компания",
    second: "Профиль",
    third: "Платежи"
  });
  let [activeBtn, setActiveBtn] = useState("Компания");
  const arr = Object.keys(navbarButtons);
  function handleNavbarClick(e, index)
  {
    e.preventDefault();
    if (navbarButtons[index] == "Компания")
    {
      setMainInfo(<PersonalAccount/>);
      setActiveBtn("Компания");
    }
    else if (navbarButtons[index] == "Профиль")
    {
      setMainInfo(<ProfileTab/>);
      setActiveBtn("Профиль");
    }
    else
    {
      setMainInfo(<PaymentsTab/>);
      setActiveBtn("Платежи");
    }
  }





  const list_users = "http://16.171.131.202/user/get/all/";
  const update_user = "http://16.171.131.202/user/update/6/";
  const create_user = "http://16.171.131.202/user/create/";
  const login_user = "http://16.171.131.202/user/login/";
  const created_user = {
      "username": "Azamat",
      "name" : "Azamat",
      "surname": "Berkimbayev",
      "iin" : null,
      "company_name" : "CargoSecure",
      "phone" : "+77476023694",
      "email": "azamat.berkimbayev@alumni.nu.edu.kz",
      "date_of_birth": null,
      "password": "asdfasdfasdf",
      "user_type": null,
      "rating": null,
      "country_id": null,
      "city_id": null,
      "address_id": null
  }

  /*
  useEffect(() => {
    axios.post(create_user, created_user)
    .then ((res) => console.log(res))
    .catch((err) => console.log(err))
  })
  */



  return (
      <div className="App">
        <div className='container'>
          <div className="fixedPart">
              <div className="header">
                  <h1>Личный Кабинет</h1>
                  <div className="quit">
                      <button> <img src={logout} alt="" /> Выйти</button>
                  </div>
              </div>
              <div className="navbar">
                {
                  arr.map((elem) => (
                    navbarButtons[elem] == activeBtn ? 
                      (<button onClick={(e) =>(handleNavbarClick(e, elem))} key={elem} id="active">{navbarButtons[elem]}</button>):
                      (<button onClick={(e) => (handleNavbarClick(e, elem))} key={elem}>{navbarButtons[elem]}</button>)
                  ))
                }
              </div>
          </div>
          {mainInfo}
        </div>
      </div>
  );
}

export default App;
