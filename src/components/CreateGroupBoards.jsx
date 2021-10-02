import React from "react";

import classes from '../styles/CreateGroupBoards.module.scss';

const CreateGroupBoards = () => {
  return (
    <div className={classes.createGroupBoard}>
      <div className={classes.createGroupBoard__button}></div>
      <div className={classes.createGroupBoard__list}></div>
    </div>
  )
}

export default CreateGroupBoards;