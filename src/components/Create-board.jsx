import React from "react";
import { Link } from "react-router-dom";

import classes from '../styles/CreateBoard.module.scss';

const CreateBoard = () => {
  return (
    <div className={classes.createBoard}>
      <Link to='/create-board'>
        <div className={classes.createBoard__button}></div>
      </Link>
      <div className={classes.createBoard__createdBoards}></div>
    </div>
  )
}

export default CreateBoard;