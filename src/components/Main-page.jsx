import React from "react";
import { Route } from "react-router";

import AddBord from "./Add-board";
import BodyPage from "./Body";
import Header from "./Header";

import classes from '../styles/Main-page.module.scss';

const MainPage = () => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <Route path='/main'>
        <BodyPage />
      </Route>
      <Route path='/create-board'>
        <AddBord />
      </Route>
    </div>
  )
}

export default MainPage;