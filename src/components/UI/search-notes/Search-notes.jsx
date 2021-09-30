import react from "react";
import classes from './Search-notes.module.scss'

const SearchNotes = () => {
  return (
    <div className={classes.sortPost}>
      <select name="" id="" className={classes.searchNotes}>
        <option value="" disabled={true}>Sort of...</option>
        <option value="" className={classes.option}>Name</option>
        <option value="" className={classes.option}>Date</option>
      </select>
    </div>
  )
}

export default SearchNotes;