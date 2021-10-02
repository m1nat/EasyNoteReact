import React from "react";
import CreateBoard from "./Create-board";

import classes from '../styles/BoardList.module.scss';
import CreateGroupBoards from "./CreateGroupBoards";

const BoardLists = () => {
  return(
    <div className={classes.boardLists}>
      <CreateBoard />
      <CreateGroupBoards />
    </div>
  )
}

export default BoardLists;