import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PersonalAccount from './components/CompanyTab';
import FixedPart from './components/FixedPart';
import ProfileTab from './components/ProfileTab';
import PaymentsTab from './components/PaymentsTab'
import { BrowserRouter as Router, Route, NavLink, Switch, BrowserRouter } from 'react-router-dom';
import YourComponent from './components/experiement';
import logout from './images/iconLogout.svg';

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
