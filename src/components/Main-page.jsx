import React from "react";
import classes from '../styles/Main-page.module.scss';
import BodyPage from "./Body";
import Header from "./Header";

const MainPage = () => {
  return(
    <div className={classes.wrapper}>
      <Header />
      <BodyPage />
    </div>
  )
}

export default MainPage;