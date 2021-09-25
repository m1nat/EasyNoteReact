import react from "react";
import classes from '../styles/Header.module.scss';
import LogoutInput from "./UI/buttons/Button";

const Header = () => {
  return(
    <div className={classes.header}>
      <div className={classes.header__logo}>
        <p>EasyNote</p>
      </div>
      <LogoutInput />
    </div>
  )
}

export default Header;