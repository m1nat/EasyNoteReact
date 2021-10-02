import react from "react";
import NoteItems from "./Notes-item";

import classes from '../styles/AddedNotes.module.scss';

const AddedNotes = () => {
  return(
    <div className={classes.wrapper}>
      <NoteItems />
      <NoteItems />
      <NoteItems />
      <NoteItems />
      <NoteItems />

    </div>
  )
}

export default AddedNotes;