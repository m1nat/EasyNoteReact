import react from "react";

import classes from '../styles/Add-board.module.scss';
import AddedNotes from "./AddedNotes";
import BoardName from "./UI/inputs/Board-name";

const AddBord = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.aside}>
      <div className={classes.aside__userinfo}>
        <div className={classes.username}>Username:</div>
        <div className={classes.useremail}>Email:</div>
      </div>
        <div className={classes.menu}>
          <div className={classes.menu__addNote}>Add note</div>
          <div className={classes.menu__color}>Change board color</div>
          <div className={classes.menu__images}>Add background</div>
          <div className={classes.menu__favorites}>Favorite</div>
          <div className={classes.menu__important}>Important</div>
        </div>
      </div>
      <div className={classes.plate}>
        <div className={classes.plate__board}>
          <div className={classes.boardname}>
            <BoardName />
          </div>
            <AddedNotes />
        </div>
      </div>
    </div>
  )
}

export default AddBord;