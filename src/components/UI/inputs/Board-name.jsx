import react from "react";
import classes from './Board-name.module.scss'

const BoardName = () => {
  return(
    <input type="text" placeholder='Click here for rename' className={classes.bordname}/>
  )
}

export default BoardName;