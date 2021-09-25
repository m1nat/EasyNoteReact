import React from "react";
import BoardLists from "./BordLists";
import AsidePage from "./Aside";

import classes from '../styles/body-page.module.scss';

const BodyPage = () => {
  return(
    <div className={classes.bodypage}>
      <AsidePage />
      <BoardLists />
    </div>
  )
}

export default BodyPage;