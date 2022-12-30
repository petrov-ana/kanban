import { useState } from "react";
import "../../styles/Header.css";
import UserAvatar from "../../images/user-avatar.svg";
import ArrowDown from "../../images/arrow-down.svg";
import ArrowUp from "../../images/arrow-up.svg";

const Header = () => {
  const [showUserMenu, setUserMenuState] = useState(false)  
  const userMenu = () =>{
    setUserMenuState(!showUserMenu)    
  }
  return(
    <header className="header">
      <div className="wrapper">
        <h1 className="header__title">Awesome Kanban Board</h1>
        <div className="header__user">
          <button
            onClick={ () => userMenu()}
            type="button"
            className="header__user-button">
            <img
              src={UserAvatar}
              alt="user-avatar"
              className="user-avatar"
            />
            <img
              src={showUserMenu ? ArrowUp : ArrowDown}
              alt="dropdown"
              className="dropdown"
            />
          </button>
          <div
            className={showUserMenu ? "header__user-actions _active" : "header__user-actions"}
          >
            <a href="#/">Profile</a>
            <a href="#/">Log out</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header